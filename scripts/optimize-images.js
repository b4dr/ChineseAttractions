const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Image optimization script for SEO performance boost
// Converts images to WebP format and compresses them for faster loading

const inputDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public/optimized');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
  webp: {
    quality: 85,
    effort: 6
  },
  jpeg: {
    quality: 85,
    progressive: true
  },
  png: {
    compressionLevel: 9,
    progressive: true
  }
};

async function optimizeImage(inputPath, outputPath, format = 'webp') {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Optimizing: ${path.basename(inputPath)} (${metadata.width}x${metadata.height})`);
    
    let pipeline = image;
    
    // Resize if too large (max 1920px width for web)
    if (metadata.width > 1920) {
      pipeline = pipeline.resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Apply format-specific optimizations
    switch (format) {
      case 'webp':
        pipeline = pipeline.webp(optimizationSettings.webp);
        break;
      case 'jpeg':
      case 'jpg':
        pipeline = pipeline.jpeg(optimizationSettings.jpeg);
        break;
      case 'png':
        pipeline = pipeline.png(optimizationSettings.png);
        break;
    }
    
    await pipeline.toFile(outputPath);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Saved ${savings}% (${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB)`);
    
    return {
      original: originalSize,
      optimized: optimizedSize,
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization for SEO performance boost...\n');
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const files = fs.readdirSync(inputDir).filter(file => 
    imageExtensions.includes(path.extname(file).toLowerCase())
  );
  
  if (files.length === 0) {
    console.log('No images found to optimize.');
    return;
  }
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let optimizedCount = 0;
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const name = path.parse(file).name;
    const outputPath = path.join(outputDir, `${name}.webp`);
    
    const result = await optimizeImage(inputPath, outputPath, 'webp');
    
    if (result) {
      totalOriginalSize += result.original;
      totalOptimizedSize += result.optimized;
      optimizedCount++;
    }
  }
  
  if (optimizedCount > 0) {
    const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n🎉 Optimization complete!`);
    console.log(`📊 Total files optimized: ${optimizedCount}`);
    console.log(`💾 Total size reduction: ${totalSavings}%`);
    console.log(`📈 Original size: ${(totalOriginalSize/1024/1024).toFixed(2)}MB`);
    console.log(`📉 Optimized size: ${(totalOptimizedSize/1024/1024).toFixed(2)}MB`);
    console.log(`⚡ This will significantly improve your site's loading speed and SEO ranking!`);
  }
}

// Critical SEO images to prioritize
const criticalImages = [
  'og-image.jpg',
  'great-wall-og.jpg',
  'forbidden-city-og.jpg',
  'chinese-new-year-2025-og.jpg',
  'hero-bg.jpg',
  'beijing-hero.jpg',
  'shanghai-hero.jpg'
];

async function optimizeCriticalImages() {
  console.log('🔥 Optimizing critical SEO images first...\n');
  
  for (const imageName of criticalImages) {
    const inputPath = path.join(inputDir, imageName);
    
    if (fs.existsSync(inputPath)) {
      const name = path.parse(imageName).name;
      const outputPath = path.join(outputDir, `${name}.webp`);
      
      await optimizeImage(inputPath, outputPath, 'webp');
    } else {
      console.log(`⚠️  Critical image not found: ${imageName}`);
    }
  }
}

// Run optimization
if (require.main === module) {
  optimizeCriticalImages()
    .then(() => optimizeAllImages())
    .then(() => {
      console.log('\n🚀 Image optimization complete! Your site will now load faster and rank better in Google!');
      console.log('💡 Next steps:');
      console.log('   1. Update your image references to use the optimized .webp versions');
      console.log('   2. Add fallback support for older browsers');
      console.log('   3. Test your site speed with Google PageSpeed Insights');
    })
    .catch(console.error);
}

module.exports = { optimizeImage, optimizeAllImages };
