# Project media provenance

- `tank-duel-corner-duel.mp4`: genuine seeded maze match recorded from the
  latest `models/play_agent.zip` (forecast206) against
  `models/play_agent_before_dodging_20261009.zip`. Source:
  `videos/website_corner_duel_20261010.mp4`; seed 8150025, 487 simulation ticks,
  three shots from each agent, green wins with no self-hit. Both agents start
  with a wall blocking their direct line of sight. Selected for illustration
  from 16 seeded matches, not a representative performance sample.
  Silent, 0.5× simulation speed. Poster is the frame at 1 second.
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

The website uses recorded results; it does not run model inference in a visitor's
browser or claim that the video is a live simulation.
