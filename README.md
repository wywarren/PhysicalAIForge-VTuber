# Physical AI Forge - VTuber

Source assets: `/Assets`

## Steps
- Crop photo to only usable close to front facing model
- Take into Affinity and clean up extraneous items and try to unify background
- Take into Google Gemini (https://gemini.google.com/) to do background "removal". It won't do a good job but it will mostly unify the background. Prompt used: `Change background into 255,0,255`. Through this process, image compression artifacts will also be cleaned up, but Gemini won't be able to produce transparent background images.
- Take the generated jpeg from Gemini and pass it to Canva for background removal (https://www.canva.com/features/background-remover/)
- Pass to ChatGPT with prompt: `Make the face properly perfectly front facing with mirrored eyes and ears and no head rotation. Hair should not be mirrored` to get proper front facing face with side ponytail.

- Pass image through `see-through` (https://github.com/shitagaki-lab/see-through) model for image segmentation



Tried GPT with poor results:
Split this into a photoshop psd file with multiple layers include left eye, right eye, left/right eye shine, left/right eye up skin, left/right eye down skin, left/right eyeball, left/right pupil, left/right ear, nose, mouth, upper lip, upper lip line, lower lip, lower lip line, mouth inside, neck, brows, face, face skin, hair front and hair back, body, clothes, face line, neck line,