# IS 117 Final Project - Action Checklist

Use this checklist to track your progress from development to final submission.

---

## Phase 1: Personalization (30-45 minutes)

### Portfolio Site Updates
- [ ] Open `docs/portfolio/index.html`
- [ ] Replace placeholder name with your actual name
- [ ] Update email address (search for "contact@aiproductengineer.com")
- [ ] Update phone number or remove if not using
- [ ] Customize case study metrics (or keep as examples)
- [ ] Update testimonial names (or keep fictional ones)
- [ ] Add your LinkedIn URL in footer
- [ ] Add your GitHub URL in footer

### Landing Page Updates
- [ ] Open `docs/index.html`
- [ ] Update hero title if desired
- [ ] Verify all links point to correct pages
- [ ] Update footer year to 2025
- [ ] Update GitHub link in footer

### Client Site (Optional)
- [ ] Keep as "GreenLeaf Landscaping" or rebrand
- [ ] Update contact information if customizing
- [ ] Verify service pricing matches your vision

### README Updates
- [ ] Replace "Your Name" with your actual name
- [ ] Update email addresses
- [ ] Update LinkedIn/GitHub URLs
- [ ] Add any additional personal information

---

## Phase 2: Integration Setup (15-30 minutes)

### Calendly Integration
- [ ] Create free account at [calendly.com](https://calendly.com)
- [ ] Set up "30 Minute Meeting" or "Consultation" event
- [ ] Copy your Calendly scheduling URL
- [ ] Open `docs/portfolio/index.html`
- [ ] Find line ~220 (Calendly embed)
- [ ] Replace `https://calendly.com/your-username/30min` with your URL
- [ ] Save and test by visiting portfolio page

### Zapier Webhook - Portfolio
- [ ] Create free account at [zapier.com](https://zapier.com)
- [ ] Click "Create Zap"
- [ ] Choose "Webhooks by Zapier" as trigger
- [ ] Select "Catch Hook"
- [ ] Copy the webhook URL provided
- [ ] Open `docs/js/portfolio.js`
- [ ] Find line 67: `const zapierWebhookURL =`
- [ ] Replace `YOUR_WEBHOOK_ID` with your actual webhook URL
- [ ] Save file
- [ ] Set up Zap action (Gmail, Sheets, Slack, etc.)
- [ ] Test by submitting portfolio contact form

### Zapier Webhook - Client Site
- [ ] Create another Zap in Zapier
- [ ] Choose "Webhooks by Zapier" → "Catch Hook"
- [ ] Copy the webhook URL
- [ ] Open `docs/js/client.js`
- [ ] Find line 59: `const zapierWebhookURL =`
- [ ] Replace `YOUR_WEBHOOK_ID` with actual webhook URL
- [ ] Save file
- [ ] Set up Zap action for client leads
- [ ] Test by submitting client quote form

### Test Integrations
- [ ] Visit portfolio site locally
- [ ] Try to book Calendly appointment
- [ ] Fill out and submit contact form
- [ ] Check Zapier received the data
- [ ] Visit client site locally
- [ ] Fill out and submit quote form
- [ ] Check Zapier received the data

---

## Phase 3: GitHub & Deployment (5-15 minutes)

### Git Setup (if not done)
- [ ] Open terminal in project folder
- [ ] Run: `git init` (if needed)
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Complete IS 117 final project"`
- [ ] Run: `git remote add origin https://github.com/ial23-blip/117_final_fall_2025.git`
- [ ] Run: `git push -u origin main`

### Enable GitHub Pages
- [ ] Go to GitHub repository in browser
- [ ] Click "Settings" tab
- [ ] Click "Pages" in left sidebar
- [ ] Under "Source", select:
  - Branch: `main`
  - Folder: `/docs`
- [ ] Click "Save"
- [ ] Wait 2-3 minutes for deployment
- [ ] Visit: `https://ial23-blip.github.io/117_final_fall_2025/`

### Verify Live Sites
- [ ] Test landing page: `https://ial23-blip.github.io/117_final_fall_2025/`
- [ ] Test portfolio: `https://ial23-blip.github.io/117_final_fall_2025/portfolio/`
- [ ] Test design style: `https://ial23-blip.github.io/117_final_fall_2025/design_style/`
- [ ] Test client site: `https://ial23-blip.github.io/117_final_fall_2025/client_site/`
- [ ] Check navigation works on all pages
- [ ] Test responsive design (resize browser)
- [ ] Test on mobile device

---

## Phase 4: Quality Assurance (30 minutes)

### Run Automated Tests
- [ ] Run: `npm run lint:html` (fix any errors)
- [ ] Run: `npm run lint:css` (fix any errors)
- [ ] Run: `npm run lighthouse` (review scores)

### Manual Testing - Desktop
- [ ] Open each site in Chrome
- [ ] Click through all navigation links
- [ ] Test all buttons and CTAs
- [ ] Verify smooth scrolling works
- [ ] Test contact forms
- [ ] Check browser console for errors

### Manual Testing - Mobile
- [ ] Open sites on your phone
- [ ] Test navigation menu
- [ ] Verify text is readable
- [ ] Test buttons are touch-friendly
- [ ] Ensure no horizontal scrolling
- [ ] Test forms on mobile

### Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test in Edge

### Accessibility Testing
- [ ] Tab through all interactive elements
- [ ] Verify focus indicators are visible
- [ ] Check color contrast (use WebAIM tool)
- [ ] Test with screen reader (optional)
- [ ] Verify alt text on images

---

## Phase 5: Presentation Creation (1-2 hours)

### Choose Platform
- [ ] Canva (recommended - free beautiful templates)
- [ ] Google Slides (cloud-based)
- [ ] PowerPoint
- [ ] Pitch (modern startup-style)

### Create Slides (7 total)
- [ ] Slide 1: The Hook (30s) - Value proposition
- [ ] Slide 2: Personal Brand (1.5m) - Portfolio case study
- [ ] Slide 3: Client Work (1.5m) - GreenLeaf sales funnel
- [ ] Slide 4: Technical Mastery (1m) - Lighthouse scores
- [ ] Slide 5: Course Learnings (30s) - Top 3 takeaways
- [ ] Slide 6: AI Collaboration (30s) - AI analysis
- [ ] Slide 7: Call to Action (30s) - Contact info

### Add Content to Slides
- [ ] Add screenshots of all 3 sites
- [ ] Include Lighthouse score graphics
- [ ] Add your contact information
- [ ] Create QR code linking to portfolio
- [ ] Add GitHub repository link
- [ ] Include live site URLs

### Design Considerations
- [ ] Use consistent color scheme
- [ ] Large, readable fonts (24pt minimum)
- [ ] High-contrast colors
- [ ] Minimal text per slide
- [ ] Professional images
- [ ] Your name on title slide

### Prepare Speaker Notes
- [ ] Add talking points to each slide
- [ ] Time yourself for each slide
- [ ] Write out key phrases
- [ ] Prepare for potential questions

---

## Phase 6: Practice & Refinement (1-2 hours)

### Practice Presentation
- [ ] Run through entire presentation once
- [ ] Time yourself (should be under 5 minutes)
- [ ] Practice in front of mirror
- [ ] Record yourself (optional)
- [ ] Practice with friend/family
- [ ] Refine based on feedback

### Prepare Demo
- [ ] Bookmark all live sites
- [ ] Clear browser cache
- [ ] Test live sites one more time
- [ ] Prepare backup screenshots
- [ ] Have phone ready with sites loaded
- [ ] Disable notifications on devices

### Create Backup Plan
- [ ] Save presentation to USB drive
- [ ] Upload to cloud (Google Drive/OneDrive)
- [ ] Email yourself a copy
- [ ] Have phone with sites bookmarked
- [ ] Print speaker notes as backup

---

## Phase 7: Final Submission (30 minutes)

### Complete Quality Checklists
Download from course repository and complete:
- [ ] [Accessibility Checklist](https://github.com/kaw393939/117_final_fall_2025/blob/main/requirements/accessibility_checklist.md)
- [ ] [UI/UX Design Checklist](https://github.com/kaw393939/117_final_fall_2025/blob/main/requirements/ui_ux_checklist.md)
- [ ] [Technical & SEO Checklist](https://github.com/kaw393939/117_final_fall_2025/blob/main/requirements/technical_checklist.md)
- [ ] [Legal & Compliance Checklist](https://github.com/kaw393939/117_final_fall_2025/blob/main/requirements/legal_checklist.md)
- [ ] [Presentation Checklist](https://github.com/kaw393939/117_final_fall_2025/blob/main/requirements/presentation_checklist.md)

### Gather Submission Materials
- [ ] GitHub repository URL
- [ ] All 4 live site URLs
- [ ] Presentation link (Google Slides) or file (PDF/PPT)
- [ ] Completed checklists
- [ ] Any additional documentation

### Submit on Canvas
- [ ] Open Canvas assignment
- [ ] Paste GitHub repository URL
- [ ] Paste all 4 live site URLs
- [ ] Upload or link presentation
- [ ] Upload completed checklists
- [ ] Add any comments/notes
- [ ] Submit assignment
- [ ] Verify submission was successful

---

## Phase 8: Final Exam Day (December 19, 2025)

### What to Bring
- [ ] Laptop with presentation loaded
- [ ] USB drive backup
- [ ] Phone with sites bookmarked
- [ ] Printed speaker notes
- [ ] Business cards (optional)
- [ ] Charger for laptop
- [ ] Water bottle

### Tech Setup (arrive early)
- [ ] Test projector connection
- [ ] Open presentation
- [ ] Test audio if using video
- [ ] Open all live sites in browser tabs
- [ ] Disable notifications
- [ ] Close unnecessary apps
- [ ] Test microphone if needed

### Pre-Presentation Checklist
- [ ] Deep breath and relax
- [ ] Review key talking points
- [ ] Check appearance
- [ ] Silence phone
- [ ] Have backup materials ready

### During Presentation
- [ ] Maintain eye contact
- [ ] Speak clearly and confidently
- [ ] Stay within 5 minutes
- [ ] Show enthusiasm
- [ ] Demonstrate live sites
- [ ] Handle questions professionally

### After Presentation
- [ ] Thank instructor and class
- [ ] Gather feedback (optional)
- [ ] Update LinkedIn with project
- [ ] Share with professional network

---

## Additional Tasks (Optional)

### Portfolio Enhancement
- [ ] Add custom domain (optional)
- [ ] Set up Google Analytics
- [ ] Add more case studies
- [ ] Create blog section
- [ ] Add downloadable resume

### Professional Development
- [ ] Update LinkedIn with project
- [ ] Add to resume
- [ ] Share on social media
- [ ] Network with classmates
- [ ] Request recommendations

### Learning & Growth
- [ ] Review instructor feedback
- [ ] Reflect on AI collaboration
- [ ] Document lessons learned
- [ ] Plan next projects
- [ ] Continue skill development

---

## Emergency Contacts & Resources

### Technical Support
- **Office Hours:** Check Canvas
- **Professor Email:** Check syllabus
- **Class Discord:** Peer support
- **TA Contact:** Check Canvas

### Documentation
- `README.md` - Complete overview
- `DEPLOYMENT_GUIDE.md` - Deployment steps
- `PRESENTATION_OUTLINE.md` - Presentation guide
- `PROJECT_COMPLETE.md` - What was built

### Online Resources
- [GitHub Pages Docs](https://pages.github.com/)
- [Calendly Help](https://help.calendly.com/)
- [Zapier Documentation](https://zapier.com/help)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Progress Tracking

**Started:** _________  
**Personalization Complete:** _________  
**Integrations Set Up:** _________  
**Deployed to GitHub Pages:** _________  
**Presentation Created:** _________  
**Practice Complete:** _________  
**Submitted on Canvas:** _________  
**Final Presentation:** December 19, 2025, 2:30PM-5:00PM, CKB 106

---

## Final Notes

- Stay organized - use this checklist!
- Start early - don't wait until last minute
- Test everything multiple times
- Practice your presentation
- Ask for help if needed
- Be proud of what you've built!

**You've got this! 🚀 Good luck on your final!**

---

**Questions?** Review the documentation files or reach out during office hours.

**Ready to present?** You've built something impressive. Show it with confidence!
