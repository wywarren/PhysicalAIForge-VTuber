# Physical AI Forge - VTuber

Source assets: `/Assets`

## Steps
- Crop photo to only usable close to front facing model
- Take into Affinity and clean up extraneous items and try to unify background
- Take into Google Gemini (https://gemini.google.com/) to do background "removal". It won't do a good job but it will mostly unify the background. Prompt used: `Change background into 255,0,255`. Through this process, image compression artifacts will also be cleaned up, but Gemini won't be able to produce transparent background images.
- Take the generated jpeg from Gemini and pass it to Canva for background removal (https://www.canva.com/features/background-remover/)
- Pass image through `see-through` (https://github.com/shitagaki-lab/see-through) model for image segmentation