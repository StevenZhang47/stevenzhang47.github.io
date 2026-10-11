# Project media provenance

- `tank-duel-corner-duel-1x.mp4`: genuine seeded maze match recorded from the
  latest `models/play_agent.zip` (forecast206) against
  `models/play_agent_before_dodging_20261009.zip`. Source:
  same seeded match as `videos/website_corner_duel_20261010.mp4`, re-rendered
  at 30 fps with one frame per four 120 Hz simulation ticks; seed 8150025, 487 simulation ticks,
  three shots from each agent, green wins with no self-hit. Both agents start
  with a wall blocking their direct line of sight. Selected for illustration
  from 16 seeded matches, not a representative performance sample.
  Silent, 1× simulation speed, with a 1-second opening hold and 2-second ending hold.
  `tank-duel-corner-poster-1x.png` is the opening frame.
- Tank benchmark figures are from `runs/dodging_20261009/report.json`, summarized
  in the project's `README_TACTICAL.md`: 224/300 wins against hard shooters and
  zero self-hits across the 1,600-game final suite. These are fixed-map results.
- `bloodmnist-examples.png`: one real training example from each BloodMNIST
  class, plotted from the existing 224px dataset. Training indices, ordered by
  class ID: 26, 10, 6, 1, 28, 22, 2, 0. Labels are dataset ground truth, not
  predictions. Dataset and source attribution: https://medmnist.com/.
- Fine-tuning test metrics come from saved outputs in
  `BioMedCLIPFineTuning_completed_run.ipynb`: cell 50 (88.89% frozen linear-probe
  accuracy) and cell 69 (96.99% partial fine-tuning accuracy), both on 3,421 test
  images. Zero-shot validation accuracy is deliberately not mixed into this
  test-set comparison. Notebook cell indices above are zero-based.
- `crispr-lineage-tree.png`: supplied by Steven from
  `MLprojects/random/image (3).png`, copied without image edits. The figure
  displays an example lineage reconstruction with 176 UMIs and 17 allele
  patterns. These counts describe the pictured example, not an accuracy
  benchmark. The project purpose supplied by Steven is a pipeline from FASTQ
  RNA-sequencing files from CRISPR lineage-tracing experiments to lineage trees.

The website uses recorded results; it does not run model inference in a visitor's
browser or claim that the video is a live simulation.

- `colloidal-crystals-surp-poster.pdf`: Steven's selected version 2 poster,
  copied unchanged from `MLprojects/random/SURPPresentation2.pdf`.
  `colloidal-crystals-surp-poster.png` is a full-page PDFKit rendering of its
  single page for the website preview; the original PDF is linked for reading.
- `colloidal-crystal-simulation.mp4`: rendered directly from
  `Downloads/trajectory_LS4.5_FP0.33_RN80_BL10_DL5.35_N4000000000.gsd`.
  All 10,125 particles are retained, with the recorded positions, particle types,
  relative diameters, and periodic box. Teal and orange distinguish P and N.
  180 evenly spaced source frames, including both endpoints, are shown at 15 fps,
  followed by a 2-second final-frame hold. The source contains 4,803 frames and
  spans timesteps 0 through 2,401,000,000; its filename is not used to infer
  completed timesteps. This is time-compressed playback, with a fixed camera,
  and no interpolated particle motion or simulated additional dynamics.
  The visualization uses spherical point sprites rendered with Three.js.
  `colloidal-crystal-simulation.png` is the final rendered frame.
