# GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/ial23-blip/117_final_fall_2025`
2. Click **Settings** (top menu)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/docs`
5. Click **Save**
6. Wait 2-3 minutes for deployment

### Step 2: Verify Deployment

Your sites will be live at:
- Landing: `https://ial23-blip.github.io/117_final_fall_2025/`
- Portfolio: `https://ial23-blip.github.io/117_final_fall_2025/portfolio/`
- Design Style: `https://ial23-blip.github.io/117_final_fall_2025/design_style/`
- Client Site: `https://ial23-blip.github.io/117_final_fall_2025/client_site/`

### Step 3: Update URLs

Replace placeholder URLs in:
- `README.md` - Update live site links
- `PRESENTATION_OUTLINE.md` - Update portfolio URL
- All `index.html` footer links

---

## Before You Push to GitHub

### 1. Update Personal Information

**Portfolio Site** (`docs/portfolio/index.html`):
- Replace "AI Product Engineer" with your name
- Update contact email
- Customize case studies
- Add your LinkedIn/GitHub links

**Portfolio JavaScript** (`docs/js/portfolio.js`):
- Line 67: Replace Zapier webhook URL with your own
- Get webhook: Zapier → Webhooks → Catch Hook

**Client Site JavaScript** (`docs/js/client.js`):
- Line 59: Replace Zapier webhook URL
- Update business name if desired

**README.md**:
- Replace "Your Name" with your actual name
- Update email addresses
- Add your LinkedIn/GitHub URLs

### 2. Customize Calendly Integration

**Get Calendly URL:**
1. Create free account at [calendly.com](https://calendly.com)
2. Set up "30 Minute Meeting" event
3. Copy your scheduling link
4. Update in `docs/portfolio/index.html` line 220:
   ```html
   data-url="https://calendly.com/YOUR-USERNAME/30min"
   ```

### 3. Set Up Zapier Webhooks

**Portfolio Contact Form:**
1. Go to [zapier.com](https://zapier.com)
2. Create Zap: "Webhooks by Zapier" → "Catch Hook"
3. Copy webhook URL
4. Paste into `docs/js/portfolio.js` line 67
5. Test with form submission
6. Connect to Gmail, Sheets, or Slack

**Client Site Quote Form:**
1. Create another Zap for client leads
2. Copy webhook URL
3. Paste into `docs/js/client.js` line 59
4. Test quote form
5. Connect to CRM or email

---

## Git Commands

### Initial Setup
```bash
# Navigate to project
cd /home/isalora101/117_final_fall_2025

# Initialize git (if not already done)
git init

# Add remote (if not already added)
git remote add origin https://github.com/ial23-blip/117_final_fall_2025.git
```

### Push to GitHub
```bash
# Add all files
git add .

# Commit with message
git commit -m "Complete IS 117 final project with all 3 sites"

# Push to GitHub
git push -u origin main
```

### Update After Changes
```bash
# Add changes
git add .

# Commit
git commit -m "Update personal information and links"

# Push
git push
```

---

## Testing Checklist

Before final submission, test:

### ✅ Navigation
- [ ] All nav links work on all pages
- [ ] Footer links navigate correctly
- [ ] Smooth scroll to sections works
- [ ] Back to home links work

### ✅ Responsive Design
- [ ] Test on mobile (320px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1920px width)
- [ ] All text is readable
- [ ] Buttons are touch-friendly
- [ ] No horizontal scroll

### ✅ Forms
- [ ] Portfolio contact form submits
- [ ] Client quote form submits
- [ ] Validation works (required fields)
- [ ] Error messages display
- [ ] Success messages show
- [ ] Zapier receives data

### ✅ Performance
- [ ] Run Lighthouse audit: `npm run lighthouse`
- [ ] Check page load times
- [ ] Verify no console errors
- [ ] Test on slow 3G connection

### ✅ Accessibility
- [ ] Tab through all interactive elements
- [ ] Use screen reader to test
- [ ] Check color contrast
- [ ] Verify alt text on images
- [ ] Test with keyboard only

### ✅ Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## Troubleshooting

### Issue: GitHub Pages not working

**Solution:**
1. Check Settings → Pages → Source is set to `main` and `/docs`
2. Verify all HTML files are in `docs/` folder
3. Check repository is public (not private)
4. Wait 5-10 minutes for DNS propagation
5. Try incognito/private browsing mode

### Issue: CSS not loading

**Solution:**
1. Check file paths are relative: `../css/style.css`
2. Verify CSS files are in `docs/css/` folder
3. Clear browser cache
4. Check browser console for 404 errors

### Issue: Lighthouse scores low

**Solution:**
1. Run locally: `npm run lighthouse`
2. Fix reported issues
3. Optimize images (keep under 200KB)
4. Minify CSS/JS if needed
5. Remove unused code

### Issue: Forms not submitting

**Solution:**
1. Check Zapier webhook URL is correct
2. Test webhook in Zapier dashboard
3. Check browser console for errors
4. Verify no CORS issues
5. Test with `mode: 'no-cors'` in fetch

---

## Final Checklist

Before submitting on Canvas:

- [ ] All sites deployed and accessible
- [ ] Personal information updated
- [ ] Contact forms working
- [ ] Calendly integration active
- [ ] README.md complete
- [ ] Presentation created
- [ ] All quality checklists completed
- [ ] Repository URL copied
- [ ] Live site URLs tested
- [ ] Screenshots taken for presentation

---

## Canvas Submission

### What to Submit:

1. **GitHub Repository URL**
   ```
   https://github.com/ial23-blip/117_final_fall_2025
   ```

2. **Live Site URLs** (all 4):
   ```
   Landing: https://ial23-blip.github.io/117_final_fall_2025/
   Portfolio: https://ial23-blip.github.io/117_final_fall_2025/portfolio/
   Design Style: https://ial23-blip.github.io/117_final_fall_2025/design_style/
   Client Site: https://ial23-blip.github.io/117_final_fall_2025/client_site/
   ```

3. **Presentation Link**
   - Google Slides: Share link with "Anyone can view"
   - Canva: Export as PDF and upload
   - PowerPoint: Upload to OneDrive and share link

4. **Self-Assessment**
   - Complete all 5 checklists from requirements folder
   - Include in README or separate document

---

## Need Help?

- **Office Hours:** Check Canvas for schedule
- **Discord:** Class server for peer support
- **Email Professor:** Check syllabus for email
- **GitHub Issues:** Ask technical questions

---

## Good Luck! 🚀

You've built something impressive. Deploy it, present it with confidence, and use it to land opportunities!

**Remember:**
- Test everything before the presentation
- Practice your 5-minute pitch
- Bring backup files on USB
- Have fun showing off your work!

---

**Questions for AI Assistant Analysis:**

1. "Describe our collaboration and my prompting strategy"
2. "How can I improve my collaboration and prompting strategy?"

(Include AI responses in your presentation!)
