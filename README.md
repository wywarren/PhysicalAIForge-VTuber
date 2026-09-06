# Physical AI Forge - VTuber

Source assets: `/Assets`

Demo temporarily hosted at: https://vtube.qoobit.com

## VTube Avatar Creation Steps
- Crop photo to only usable close to front facing model
- Take into Affinity and clean up extraneous items and try to unify background
- Take into Google Gemini (https://gemini.google.com/) to do background "removal". It won't do a good job but it will mostly unify the background. Prompt used: `Change background into 255,0,255`. Through this process, image compression artifacts will also be cleaned up, but Gemini won't be able to produce transparent background images.
- Take the generated jpeg from Gemini and pass it to Canva for background removal (https://www.canva.com/features/background-remover/)
- Pass to ChatGPT with prompt: `Make the face properly perfectly front facing with mirrored eyes and ears and no head rotation. Hair should not be mirrored` to get proper front facing face with side ponytail.
- Pass image through `see-through` (https://github.com/shitagaki-lab/see-through) model for image segmentation


## Platform Server
- Located in `/VTube`. See `README.md` for npm setup instructions.
- Currently using a Nuxt4 setup with default dev port set to 3001 and hosted build to 3005.
- May need to setup reverse proxy hosting to build port if using something like nginx.


## Credits
- Sample plate from unsplash: `https://unsplash.com/photos/person-walking-inside-building-near-glass-2TLREZi7BUg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink` from Heidi Fin
- Image Decomposition `see-through` (https://github.com/shitagaki-lab/see-through)