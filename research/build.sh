#!/bin/bash

# Research Documentation Build Script
# Builds MkDocs documentation for the NWSL research section

echo "🔬 Building NWSL Research Documentation..."
echo "----------------------------------------"

# Navigate to research directory
cd "$(dirname "$0")"

# Build the documentation
echo "📚 Running MkDocs build..."
mkdocs build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Output location: public/research/"
    echo ""
    echo "Next steps:"
    echo "1. Review changes: git status"
    echo "2. Commit: git add -A && git commit -m 'Update research documentation'"
    echo "3. Deploy: git push"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi