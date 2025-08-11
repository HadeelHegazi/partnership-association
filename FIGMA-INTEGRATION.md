# 🎨 Figma Integration Guide

This guide will help you integrate your Figma designs into your React project.

## 📋 **Step 1: Extract Design Tokens from Figma**

### **Colors**
1. Select any element in Figma
2. Look at the **Fill** property in the right panel
3. Copy the hex code (e.g., #667eea)
4. Update the corresponding variable in `src/styles/design-system.css`

### **Typography**
1. Select text in Figma
2. Check the **Text** properties:
   - Font family
   - Font size
   - Font weight
   - Line height
3. Update the CSS variables accordingly

### **Spacing**
1. Use Figma's **Inspect** mode
2. Check margins, padding, and gaps
3. Convert to rem units (1rem = 16px)
4. Update spacing variables

### **Layout**
1. Check component dimensions
2. Note grid systems and breakpoints
3. Update responsive breakpoints in CSS

## 🔧 **Step 2: Update Design System**

Replace the placeholder values in `src/styles/design-system.css`:

```css
:root {
  /* Replace these with your Figma colors */
  --primary-color: #YOUR_FIGMA_COLOR;
  --secondary-color: #YOUR_FIGMA_COLOR;
  
  /* Replace with your Figma typography */
  --font-family-primary: 'YOUR_FIGMA_FONT';
  --font-size-base: YOUR_FIGMA_SIZE;
}
```

## 📱 **Step 3: Implement Components**

### **Option A: Manual Implementation**
1. Create React components based on Figma designs
2. Use the design system CSS variables
3. Apply exact measurements from Figma

### **Option B: Use Figma Plugins**
1. Install "Figma to Code" plugin
2. Select your design
3. Export as React/HTML
4. Copy the generated code

### **Option C: Screenshot Reference**
1. Take screenshots of your Figma designs
2. Use them as visual reference
3. Implement manually with design system

## 🎯 **Step 4: Component Structure**

Organize your components like this:

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   └── FeatureCard/
│       ├── FeatureCard.jsx
│       └── FeatureCard.css
├── styles/
│   └── design-system.css
└── App.jsx
```

## 🚀 **Step 5: Quick Start Example**

Here's how to quickly implement a Figma component:

1. **Extract the design:**
   - Colors: #FF6B6B (primary), #4ECDC4 (secondary)
   - Typography: Inter, 24px, 600 weight
   - Spacing: 32px padding, 16px gap

2. **Update design system:**
   ```css
   :root {
     --primary-color: #FF6B6B;
     --secondary-color: #4ECDC4;
     --font-size-2xl: 1.5rem; /* 24px */
     --font-weight-semibold: 600;
     --spacing-xl: 2rem; /* 32px */
     --spacing-md: 1rem; /* 16px */
   }
   ```

3. **Use in component:**
   ```jsx
   <div className="card p-xl">
     <h2 className="text-2xl font-semibold" style={{color: 'var(--primary-color)'}}>
       Your Figma Title
     </h2>
   </div>
   ```

## 📚 **Useful Figma Features**

### **Dev Mode**
- Right-click → "Inspect"
- See exact CSS properties
- Copy colors, fonts, and measurements

### **Auto Layout**
- Check spacing between elements
- Note gaps and padding values
- Understand responsive behavior

### **Component Library**
- Use consistent components
- Maintain design consistency
- Speed up development

## 🎨 **Design Token Examples**

### **Color Palette**
```css
:root {
  /* Brand Colors */
  --brand-primary: #FF6B6B;
  --brand-secondary: #4ECDC4;
  --brand-accent: #45B7D1;
  
  /* Semantic Colors */
  --success: #2ECC71;
  --warning: #F39C12;
  --error: #E74C3C;
  
  /* Neutral Colors */
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-900: #111827;
}
```

### **Typography Scale**
```css
:root {
  /* Heading Scale */
  --h1: 3rem;      /* 48px */
  --h2: 2.25rem;   /* 36px */
  --h3: 1.875rem;  /* 30px */
  --h4: 1.5rem;    /* 24px */
  --h5: 1.25rem;   /* 20px */
  --h6: 1.125rem;  /* 18px */
  
  /* Body Text */
  --body-large: 1.125rem;  /* 18px */
  --body: 1rem;            /* 16px */
  --body-small: 0.875rem;  /* 14px */
  --caption: 0.75rem;      /* 12px */
}
```

## 🔍 **Troubleshooting**

### **Common Issues:**
1. **Colors don't match:** Check hex codes and opacity
2. **Fonts look different:** Ensure font files are loaded
3. **Spacing is off:** Convert pixels to rem units
4. **Responsive issues:** Check breakpoints and media queries

### **Solutions:**
1. Use browser dev tools to inspect elements
2. Compare with Figma measurements
3. Test on different screen sizes
4. Validate CSS variables are working

## 📖 **Next Steps**

1. **Start with one component** - Pick the simplest one
2. **Extract design tokens** - Colors, typography, spacing
3. **Update the design system** - Replace placeholder values
4. **Implement the component** - Use the design system
5. **Test and iterate** - Compare with Figma design
6. **Repeat for other components** - Build systematically

## 🎯 **Pro Tips**

- **Start small** - Don't try to implement everything at once
- **Use CSS variables** - Makes updates easier and consistent
- **Test responsiveness** - Ensure designs work on all devices
- **Keep Figma open** - Reference it while coding
- **Use browser dev tools** - Inspect and debug in real-time

---

**Need help?** Check the component examples in your project or ask for specific guidance!
