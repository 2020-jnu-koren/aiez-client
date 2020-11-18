export const TRAIN_LOG = `
TASK_START
worker=telemetry
Docker image will be pulled
image_name=aiez/nn-cocossd:latest, worker=telemetry
Docker image has been pulled
pulled={"tags":["aiez/nn-cocossd:latest"],"id":"sha256:fd9be3d3208c9ce5f8ad9a2719b306ba724fc683dc354e10a2043ec3d615e18e"}, worker=telemetry
WAIT_FOR_TASK_LOG
worker=telemetry
TASK_START
worker=telemetry
TASK_MSG
worker=telemetry
LAST_COMPLETE_STEP
step=null, worker=telemetry
BEFORE_STEP
step=DOWNLOAD, worker=telemetry
DOWNLOAD_DATA
worker=telemetry
DOWNLOAD_PROJECT
title=find apple_tagged, worker=telemetry
Dataset 'apple'
total_images=11, images_in_cache=11, images_to_download=0, worker=telemetry
DOWNLOAD_MODEL
nn_title=YOLO v3 (COCO), worker=telemetry
NN has been copied from local storage.
worker=telemetry
STEP_DONE
step=DOWNLOAD, worker=telemetry
BEFORE_STEP
step=MAIN, worker=telemetry
DIRECTORY_TREE
tree=/sly_agent/tasks/236492
├── [   0]  __do_not_clean.marker
├── [4.0K]  data
│   └── [4.0K]  find apple_tagged
│       ├── [4.0K]  apple
│       │   ├── [4.0K]  ann
│       │   │   ├── [1.1K]  download (1).jpeg.json
│       │   │   ├── [1.1K]  download (2).jpeg.json
│       │   │   ├── [1.1K]  download (3).jpeg.json
│       │   │   ├── [1.1K]  download.jpeg.json
│       │   │   ├── [1.1K]  images (1).jpeg.json
│       │   │   ├── [1.1K]  images (2).jpeg.json
│       │   │   ├── [1.1K]  images (3).jpeg.json
│       │   │   ├── [1.1K]  images (4).jpeg.json
│       │   │   ├── [3.0K]  images (5).jpeg.json
│       │   │   ├── [1.1K]  images (6).jpeg.json
│       │   │   └── [2.4K]  images.jpeg.json
│       │   └── [4.0K]  img
│       │       ├── [ 11K]  download (1).jpeg
│       │       ├── [ 11K]  download (2).jpeg
│       │       ├── [6.0K]  download (3).jpeg
│       │       ├── [ 13K]  download.jpeg
│       │       ├── [5.3K]  images (1).jpeg
│       │       ├── [4.7K]  images (2).jpeg
│       │       ├── [8.1K]  images (3).jpeg
│       │       ├── [8.0K]  images (4).jpeg
│       │       ├── [8.7K]  images (5).jpeg
│       │       ├── [10.0K]  images (6).jpeg
│       │       └── [ 11K]  images.jpeg
│       └── [ 744]  meta.json
├── [4.0K]  logs
│   ├── [1.5K]  log_2020-11-11_11:41:38.txt
│   └── [7.9K]  log_2020-11-11_11:41:44.txt
├── [4.0K]  model
│   ├── [8.8K]  config.json
│   ├── [8.1K]  model.cfg
│   └── [237M]  model.weights
├── [4.0K]  results
├── [ 571]  task_config.json
├── [ 571]  task_settings.json
└── [4.0K]  tmp
9 directories, 31 files
, worker=telemetry
Docker container is spawned
container_id=5f4c9d152f999cd969681608194d24d90ed8e2ef28bd0dd671999d33e1099255, container_name=sly_task_236492_aiez_4b9808321d43b3e7683a710d930560f32b1cb5975bd08693c9bff6d9d8d0a24e, worker=telemetry
Will init all required to train.
worker=telemetry
Project structure has been read. Samples: 11.
worker=telemetry
Input config
config={"lr":0.0001,"epochs":10,"batch_size":{"train":8},"input_size":{"width":416,"height":416},"bn_momentum":0.01,"gpu_devices":[0],"data_workers":{"val":1,"train":2},"dataset_tags":{"train":"train"},"subdivisions":{"val":1,"train":1},"checkpoint_every":1,"print_every_iter":5,"recompute_anchors":false,"weights_init_type":"transfer_learning","enable_augmentations":false}, worker=telemetry
Full config
config={"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false}, worker=telemetry
Determined model out classes
classes=["Name:  apple     Shape: Rectangle    Color: [27, 248, 241] Geom. settings: {}              "], worker=telemetry
Transfer learning mode, using a class mapping created from scratch.
worker=telemetry
Determined class mapping.
class_mapping={"apple":0}, worker=telemetry
Will collect samples (image/annotation pairs).
worker=telemetry
Prepared dataset.
dataset_purpose=train, dataset_tag=train, sample_cnt=8, worker=telemetry
Prepared dataset.
dataset_purpose=val, dataset_tag=val, sample_cnt=3, worker=telemetry
Model config created.
worker=telemetry
Weights will be inited from given model.
weights_init_type=transfer_learning, worker=telemetry
Model is ready to train.
worker=telemetry
Will load model layers up to index 80.
worker=telemetry
cont_msg=ds_len: 8, ngpus: 1, num_threads: 2, epochs: 10, train_steps: 1
, worker=telemetry
cont_msg=layer_cutoff: 80, use_augm: 0, print_every: 5, bn_momentum: 0.010000
, worker=telemetry
cont_msg=cfgfile: "/tmp/model.cfg", weightfile: "/sly_task_data/model/model.weights"
, worker=telemetry
cont_msg=model
, worker=telemetry
cont_msg=layer     filters    size              input                output
, worker=telemetry
cont_msg=    0 conv     32  3 x 3 / 1   416 x 416 x   3   ->   416 x 416 x  32  0.299 BFLOPs
, worker=telemetry
cont_msg=    1 conv     64  3 x 3 / 2   416 x 416 x  32   ->   208 x 208 x  64  1.595 BFLOPs
, worker=telemetry
cont_msg=    2 conv     32  1 x 1 / 1   208 x 208 x  64   ->   208 x 208 x  32  0.177 BFLOPs
, worker=telemetry
cont_msg=    3 conv     64  3 x 3 / 1   208 x 208 x  32   ->   208 x 208 x  64  1.595 BFLOPs
, worker=telemetry
cont_msg=    4 res    1                 208 x 208 x  64   ->   208 x 208 x  64
, worker=telemetry
cont_msg=    5 conv    128  3 x 3 / 2   208 x 208 x  64   ->   104 x 104 x 128  1.595 BFLOPs
, worker=telemetry
cont_msg=    6 conv     64  1 x 1 / 1   104 x 104 x 128   ->   104 x 104 x  64  0.177 BFLOPs
, worker=telemetry
cont_msg=    7 conv    128  3 x 3 / 1   104 x 104 x  64   ->   104 x 104 x 128  1.595 BFLOPs
, worker=telemetry
cont_msg=    8 res    5                 104 x 104 x 128   ->   104 x 104 x 128
, worker=telemetry
cont_msg=    9 conv     64  1 x 1 / 1   104 x 104 x 128   ->   104 x 104 x  64  0.177 BFLOPs
, worker=telemetry
cont_msg=   10 conv    128  3 x 3 / 1   104 x 104 x  64   ->   104 x 104 x 128  1.595 BFLOPs
, worker=telemetry
cont_msg=   11 res    8                 104 x 104 x 128   ->   104 x 104 x 128
, worker=telemetry
cont_msg=   12 conv    256  3 x 3 / 2   104 x 104 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=   13 conv    128  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x 128  0.177 BFLOPs
, worker=telemetry
cont_msg=   14 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=   15 res   12                  52 x  52 x 256   ->    52 x  52 x 256
, worker=telemetry
cont_msg=   16 conv    128  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x 128  0.177 BFLOPs
, worker=telemetry
cont_msg=   17 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=   18 res   15                  52 x  52 x 256   ->    52 x  52 x 256
, worker=telemetry
cont_msg=   19 conv    128  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x 128  0.177 BFLOPs
, worker=telemetry
cont_msg=   20 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=   21 res   18                  52 x  52 x 256   ->    52 x  52 x 256
, worker=telemetry
cont_msg=   22 conv    128  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x 128  0.177 BFLOPs
, worker=telemetry
cont_msg=   23 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=   24 res   21                  52 x  52 x 256   ->    52 x  52 x 256
, worker=telemetry
cont_msg=   25 conv    128  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x 128  0.177 BFLOPs
, worker=telemetry
cont_msg=   26 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=   27 res   24                  52 x  52 x 256   ->    52 x  52 x 256
, worker=telemetry
cont_msg=   28 conv    128  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x 128  0.177 BFLOPs
, worker=telemetry
cont_msg=   29 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=   30 res   27                  52 x  52 x 256   ->    52 x  52 x 256
, worker=telemetry
cont_msg=   31 conv    128  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x 128  0.177 BFLOPs
, worker=telemetry
cont_msg=   32 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=   33 res   30                  52 x  52 x 256   ->    52 x  52 x 256
, worker=telemetry
cont_msg=   34 conv    128  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x 128  0.177 BFLOPs
, worker=telemetry
cont_msg=   35 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=   36 res   33                  52 x  52 x 256   ->    52 x  52 x 256
, worker=telemetry
cont_msg=   37 conv    512  3 x 3 / 2    52 x  52 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   38 conv    256  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x 256  0.177 BFLOPs
, worker=telemetry
cont_msg=   39 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   40 res   37                  26 x  26 x 512   ->    26 x  26 x 512
, worker=telemetry
cont_msg=   41 conv    256  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x 256  0.177 BFLOPs
, worker=telemetry
cont_msg=   42 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   43 res   40                  26 x  26 x 512   ->    26 x  26 x 512
, worker=telemetry
cont_msg=   44 conv    256  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x 256  0.177 BFLOPs
, worker=telemetry
cont_msg=   45 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   46 res   43                  26 x  26 x 512   ->    26 x  26 x 512
, worker=telemetry
cont_msg=   47 conv    256  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x 256  0.177 BFLOPs
, worker=telemetry
cont_msg=   48 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   49 res   46                  26 x  26 x 512   ->    26 x  26 x 512
, worker=telemetry
cont_msg=   50 conv    256  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x 256  0.177 BFLOPs
, worker=telemetry
cont_msg=   51 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   52 res   49                  26 x  26 x 512   ->    26 x  26 x 512
, worker=telemetry
cont_msg=   53 conv    256  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x 256  0.177 BFLOPs
, worker=telemetry
cont_msg=   54 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   55 res   52                  26 x  26 x 512   ->    26 x  26 x 512
, worker=telemetry
cont_msg=   56 conv    256  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x 256  0.177 BFLOPs
, worker=telemetry
cont_msg=   57 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   58 res   55                  26 x  26 x 512   ->    26 x  26 x 512
, worker=telemetry
cont_msg=   59 conv    256  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x 256  0.177 BFLOPs
, worker=telemetry
cont_msg=   60 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   61 res   58                  26 x  26 x 512   ->    26 x  26 x 512
, worker=telemetry
cont_msg=   62 conv   1024  3 x 3 / 2    26 x  26 x 512   ->    13 x  13 x1024  1.595 BFLOPs
, worker=telemetry
cont_msg=   63 conv    512  1 x 1 / 1    13 x  13 x1024   ->    13 x  13 x 512  0.177 BFLOPs
, worker=telemetry
cont_msg=   64 conv   1024  3 x 3 / 1    13 x  13 x 512   ->    13 x  13 x1024  1.595 BFLOPs
, worker=telemetry
cont_msg=   65 res   62                  13 x  13 x1024   ->    13 x  13 x1024
, worker=telemetry
cont_msg=   66 conv    512  1 x 1 / 1    13 x  13 x1024   ->    13 x  13 x 512  0.177 BFLOPs
, worker=telemetry
cont_msg=   67 conv   1024  3 x 3 / 1    13 x  13 x 512   ->    13 x  13 x1024  1.595 BFLOPs
, worker=telemetry
cont_msg=   68 res   65                  13 x  13 x1024   ->    13 x  13 x1024
, worker=telemetry
cont_msg=   69 conv    512  1 x 1 / 1    13 x  13 x1024   ->    13 x  13 x 512  0.177 BFLOPs
, worker=telemetry
cont_msg=   70 conv   1024  3 x 3 / 1    13 x  13 x 512   ->    13 x  13 x1024  1.595 BFLOPs
, worker=telemetry
cont_msg=   71 res   68                  13 x  13 x1024   ->    13 x  13 x1024
, worker=telemetry
cont_msg=   72 conv    512  1 x 1 / 1    13 x  13 x1024   ->    13 x  13 x 512  0.177 BFLOPs
, worker=telemetry
cont_msg=   73 conv   1024  3 x 3 / 1    13 x  13 x 512   ->    13 x  13 x1024  1.595 BFLOPs
, worker=telemetry
cont_msg=   74 res   71                  13 x  13 x1024   ->    13 x  13 x1024
, worker=telemetry
cont_msg=   75 conv    512  1 x 1 / 1    13 x  13 x1024   ->    13 x  13 x 512  0.177 BFLOPs
, worker=telemetry
cont_msg=   76 conv   1024  3 x 3 / 1    13 x  13 x 512   ->    13 x  13 x1024  1.595 BFLOPs
, worker=telemetry
cont_msg=   77 conv    512  1 x 1 / 1    13 x  13 x1024   ->    13 x  13 x 512  0.177 BFLOPs
, worker=telemetry
cont_msg=   78 conv   1024  3 x 3 / 1    13 x  13 x 512   ->    13 x  13 x1024  1.595 BFLOPs
, worker=telemetry
cont_msg=   79 conv    512  1 x 1 / 1    13 x  13 x1024   ->    13 x  13 x 512  0.177 BFLOPs
, worker=telemetry
cont_msg=   80 conv   1024  3 x 3 / 1    13 x  13 x 512   ->    13 x  13 x1024  1.595 BFLOPs
, worker=telemetry
cont_msg=   81 conv     18  1 x 1 / 1    13 x  13 x1024   ->    13 x  13 x  18  0.006 BFLOPs
, worker=telemetry
cont_msg=   82 detection
, worker=telemetry
cont_msg=   83 route  79
, worker=telemetry
cont_msg=   84 conv    256  1 x 1 / 1    13 x  13 x 512   ->    13 x  13 x 256  0.044 BFLOPs
, worker=telemetry
cont_msg=   85 upsample            2x    13 x  13 x 256   ->    26 x  26 x 256
, worker=telemetry
cont_msg=   86 route  85 61
, worker=telemetry
cont_msg=   87 conv    256  1 x 1 / 1    26 x  26 x 768   ->    26 x  26 x 256  0.266 BFLOPs
, worker=telemetry
cont_msg=   88 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   89 conv    256  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x 256  0.177 BFLOPs
, worker=telemetry
cont_msg=   90 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   91 conv    256  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x 256  0.177 BFLOPs
, worker=telemetry
cont_msg=   92 conv    512  3 x 3 / 1    26 x  26 x 256   ->    26 x  26 x 512  1.595 BFLOPs
, worker=telemetry
cont_msg=   93 conv     18  1 x 1 / 1    26 x  26 x 512   ->    26 x  26 x  18  0.012 BFLOPs
, worker=telemetry
cont_msg=   94 detection
, worker=telemetry
cont_msg=   95 route  91
, worker=telemetry
cont_msg=   96 conv    128  1 x 1 / 1    26 x  26 x 256   ->    26 x  26 x 128  0.044 BFLOPs
, worker=telemetry
cont_msg=   97 upsample            2x    26 x  26 x 128   ->    52 x  52 x 128
, worker=telemetry
cont_msg=   98 route  97 36
, worker=telemetry
cont_msg=   99 conv    128  1 x 1 / 1    52 x  52 x 384   ->    52 x  52 x 128  0.266 BFLOPs
, worker=telemetry
cont_msg=  100 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=  101 conv    128  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x 128  0.177 BFLOPs
, worker=telemetry
cont_msg=  102 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=  103 conv    128  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x 128  0.177 BFLOPs
, worker=telemetry
cont_msg=  104 conv    256  3 x 3 / 1    52 x  52 x 128   ->    52 x  52 x 256  1.595 BFLOPs
, worker=telemetry
cont_msg=  105 conv     18  1 x 1 / 1    52 x  52 x 256   ->    52 x  52 x  18  0.025 BFLOPs
, worker=telemetry
cont_msg=  106 detection
, worker=telemetry
cont_msg=Loading weights from /sly_task_data/model/model.weights...
, worker=telemetry
cont_msg=Will load weights for layer 000 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 001 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 002 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 003 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 004 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 005 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 006 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 007 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 008 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 009 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 010 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 011 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 012 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 013 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 014 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 015 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 016 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 017 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 018 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 019 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 020 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 021 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 022 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 023 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 024 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 025 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 026 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 027 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 028 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 029 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 030 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 031 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 032 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 033 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 034 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 035 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 036 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 037 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 038 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 039 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 040 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 041 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 042 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 043 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 044 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 045 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 046 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 047 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 048 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 049 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 050 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 051 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 052 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 053 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 054 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 055 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 056 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 057 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 058 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 059 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 060 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 061 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 062 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 063 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 064 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 065 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 066 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 067 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 068 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 069 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 070 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 071 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 072 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 073 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 074 / 107              shortcut
, worker=telemetry
cont_msg=Will load weights for layer 075 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 076 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 077 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 078 / 107         convolutional
, worker=telemetry
cont_msg=Will load weights for layer 079 / 107         convolutional
, worker=telemetry
cont_msg=Done!
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Learning Rate: 0.0001, Momentum: 0.9, Decay: 0.0005
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.381398, Class: 0.412748, Obj: 0.246940, No Obj: 0.421556, .5R: 0.249969, .75R: 0.000000,  count: 8
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.494557, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.416105, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Iter 000001 / 000010   Loss now: 776.18438721
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.204140, Class: 0.517513, Obj: 0.244317, No Obj: 0.277303, .5R: 0.000000, .75R: 0.000000,  count: 12
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.135164, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.042195, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Saving weights to /sly_task_data/results/00000000/model.weights
, worker=telemetry
cont_msg=Epoch 000000 / 000010   Val loss now: 49.19531631
, worker=telemetry
cont_msg=
, worker=telemetry
MODEL_SAVED
model_id=507995, model_hash=a/P/Dq/vkMeGb6xwY5irM396aoPeZF8B8wQo2Jym8P8tc65fASOm4gYGy0sLeETHfOEmEJO8wI26ysrJ4DErrxWLk8s1XjJ8pPs02kC1hXR7bAh0oPkOsl6CCu0S0QpK75C.tar, model_config={"settings":{"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false},"out_classes":[{"title":"apple","shape":"rectangle","color":"#1BF8F1","geometry_config":{}}],"class_title_to_idx":{"apple":0}}, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.299372, Class: 0.616610, Obj: 0.150809, No Obj: 0.292422, .5R: 0.249969, .75R: 0.000000,  count: 8
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.135476, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.041939, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Iter 000002 / 000010   Loss now: 47.80947495
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.294473, Class: 0.540966, Obj: 0.113443, No Obj: 0.126080, .5R: 0.000000, .75R: 0.000000,  count: 12
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.016791, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.002348, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Epoch 000001 / 000010   Val loss now: 7.08749247
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Saving weights to /sly_task_data/results/00000001/model.weights
, worker=telemetry
MODEL_SAVED
model_id=507996, model_hash=M/5/9S/dM3lqaquVfPU0jmwvwpAWaUV81NC1MB3M8TP5HoO5mVZaP4nIMRFgRAHf8ZlOjBGnMDfjM7Qx5ajOM9iScR9VLaZm4Ubyga0bCAHTNJ8CEjFLIdUpYFTEHfjy0uA.tar, model_config={"settings":{"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false},"out_classes":[{"title":"apple","shape":"rectangle","color":"#1BF8F1","geometry_config":{}}],"class_title_to_idx":{"apple":0}}, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.388650, Class: 0.647557, Obj: 0.048245, No Obj: 0.136613, .5R: 0.124984, .75R: 0.000000,  count: 8
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.016797, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.002124, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Iter 000003 / 000010   Loss now: 5.63565779
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.305386, Class: 0.514747, Obj: 0.033538, No Obj: 0.041639, .5R: 0.214270, .75R: 0.000000,  count: 14
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.002243, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000179, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Saving weights to /sly_task_data/results/00000002/model.weights
, worker=telemetry
cont_msg=Epoch 000002 / 000010   Val loss now: 4.68437338
, worker=telemetry
cont_msg=
, worker=telemetry
MODEL_SAVED
model_id=507997, model_hash=A/D/xk/GAACZPkP6YCOcANkO1ishYgG5khDIifDs7rL2DfXOInLGNHhs2l0c4cr39mbR7eBJx4w1y0smm90ZtWTRab22xCmrMLtIzCdwadsSE5IgOTrJjq3WT2kCNuYTSby.tar, model_config={"settings":{"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false},"out_classes":[{"title":"apple","shape":"rectangle","color":"#1BF8F1","geometry_config":{}}],"class_title_to_idx":{"apple":0}}, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.394282, Class: 0.648612, Obj: 0.029671, No Obj: 0.049013, .5R: 0.124984, .75R: 0.000000,  count: 8
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.002676, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000198, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Iter 000004 / 000010   Loss now: 1.81974602
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.341112, Class: 0.515954, Obj: 0.012472, No Obj: 0.011984, .5R: 0.214270, .75R: 0.000000,  count: 14
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000339, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000021, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Saving weights to /sly_task_data/results/00000003/model.weights
, worker=telemetry
cont_msg=Epoch 000003 / 000010   Val loss now: 3.08899379
, worker=telemetry
cont_msg=
, worker=telemetry
MODEL_SAVED
model_id=507998, model_hash=y/d/S8/CVZ9RaqFzlUbuNMB37LCk54in1OZJwuQsJuC46yNJpYJf5BcR5nNIBNwMwmMURcl4t2iGPqOYIfdGm1OslKlwQ2apBCkMyVoSMxfAkMUXgHhLT5rALwN0r8MEcr4.tar, model_config={"settings":{"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false},"out_classes":[{"title":"apple","shape":"rectangle","color":"#1BF8F1","geometry_config":{}}],"class_title_to_idx":{"apple":0}}, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.452203, Class: 0.665245, Obj: 0.013606, No Obj: 0.014504, .5R: 0.624922, .75R: 0.000000,  count: 8
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000405, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000023, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Iter 000005 / 000010   Loss now: 1.26858914
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.362139, Class: 0.510978, Obj: 0.003060, No Obj: 0.004534, .5R: 0.199980, .75R: 0.000000,  count: 10
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000092, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000004, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Epoch 000004 / 000010   Val loss now: 1.85472202
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Saving weights to /sly_task_data/results/00000004/model.weights
, worker=telemetry
MODEL_SAVED
model_id=507999, model_hash=5/T/Uj/ZnOjaRavEqyfrWc7H62C43I1sfZgHLXHa81S7usMeRg5heZCB1BIMtfHXY3gUED0nfsWNnr3nHYGuiRWGBJ4PluBogvhcCbAAbZMYh7Oq8WQ67n4VuCuTAVVIWSa.tar, model_config={"settings":{"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false},"out_classes":[{"title":"apple","shape":"rectangle","color":"#1BF8F1","geometry_config":{}}],"class_title_to_idx":{"apple":0}}, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.437544, Class: 0.637135, Obj: 0.003097, No Obj: 0.004334, .5R: 0.454504, .75R: 0.000000,  count: 11
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000070, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000003, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Iter 000006 / 000010   Loss now: 1.99523699
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.381570, Class: 0.569764, Obj: 0.001540, No Obj: 0.001369, .5R: 0.428541, .75R: 0.000000,  count: 14
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000015, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000001, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Epoch 000005 / 000010   Val loss now: 3.01609397
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Saving weights to /sly_task_data/results/00000005/model.weights
, worker=telemetry
MODEL_SAVED
model_id=508000, model_hash=z/J/UJ/Lsk1e81lk9dZJbFNuyufRILydg3XlL3OZ8LD4Q9iwzz28MwGJnxBcX4HW4BsN9Jw01prQ3oEyMcnY77pTpaeqJwJsK7NkNb18J07GNMYxBBEpTdUey4UMzIbosBn.tar, model_config={"settings":{"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false},"out_classes":[{"title":"apple","shape":"rectangle","color":"#1BF8F1","geometry_config":{}}],"class_title_to_idx":{"apple":0}}, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.380632, Class: 0.706049, Obj: 0.001592, No Obj: 0.001765, .5R: 0.181802, .75R: 0.000000,  count: 11
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000017, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000001, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Iter 000007 / 000010   Loss now: 1.62898314
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.458042, Class: 0.587416, Obj: 0.000767, No Obj: 0.000561, .5R: 0.499958, .75R: 0.166653,  count: 12
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000005, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000000, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Saving weights to /sly_task_data/results/00000006/model.weights
, worker=telemetry
cont_msg=Epoch 000006 / 000010   Val loss now: 1.82469571
, worker=telemetry
cont_msg=
, worker=telemetry
MODEL_SAVED
model_id=508001, model_hash=y/D/cO/dpIMB0hvV89YkISRzzfd8xUEzRsR8p1CNSMcVmbOPa12UVXjmMipRYUsbpiE2pG8kaX7g5xxLsGzjNgPguPXoSZT17ymqVD3WMEZwAWqmH7ziTgp8dnaorZkhuzA.tar, model_config={"settings":{"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false},"out_classes":[{"title":"apple","shape":"rectangle","color":"#1BF8F1","geometry_config":{}}],"class_title_to_idx":{"apple":0}}, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.360207, Class: 0.584670, Obj: 0.001482, No Obj: 0.000692, .5R: 0.000000, .75R: 0.000000,  count: 11
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000005, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000000, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Iter 000008 / 000010   Loss now: 1.69002903
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.526834, Class: 0.558258, Obj: 0.000617, No Obj: 0.000318, .5R: 0.499969, .75R: 0.000000,  count: 16
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000002, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000000, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Epoch 000007 / 000010   Val loss now: 1.91431034
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Saving weights to /sly_task_data/results/00000007/model.weights
, worker=telemetry
MODEL_SAVED
model_id=508002, model_hash=i/c/yc/H2rO2O1kJ9JZ1Q1WwmOZvASLLSz0dcL7LlJtAhKkpOfIMRq7vQ4m9RBwdRKlSKQ4ftPbkCVYjoibO2YGXT4yROYWKe12dvPhKA6KKolt6t1GhUr9h4tTSpQdaVj7.tar, model_config={"settings":{"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false},"out_classes":[{"title":"apple","shape":"rectangle","color":"#1BF8F1","geometry_config":{}}],"class_title_to_idx":{"apple":0}}, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.430891, Class: 0.594777, Obj: 0.000495, No Obj: 0.000289, .5R: 0.357117, .75R: 0.071423,  count: 14
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000001, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000000, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Iter 000009 / 000010   Loss now: 2.30551410
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.541198, Class: 0.684699, Obj: 0.000294, No Obj: 0.000136, .5R: 0.785658, .75R: 0.000000,  count: 14
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000001, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000000, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Saving weights to /sly_task_data/results/00000008/model.weights
, worker=telemetry
cont_msg=Epoch 000008 / 000010   Val loss now: 1.72787249
, worker=telemetry
cont_msg=
, worker=telemetry
MODEL_SAVED
model_id=508003, model_hash=d/w/hd/6Lzk6iPDfd24MVvuYOhKNr7DystXreR5aSlwwtJVDHZQSIZSORHBERnjBvz1w2kSFGFgj9tujHyl2ULpvQGLUUE9DAFb5SceDPGGbhgyERc4571XX0Jp1Izqr9OG.tar, model_config={"settings":{"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false},"out_classes":[{"title":"apple","shape":"rectangle","color":"#1BF8F1","geometry_config":{}}],"class_title_to_idx":{"apple":0}}, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.546698, Class: 0.749157, Obj: 0.000994, No Obj: 0.000163, .5R: 0.624922, .75R: 0.000000,  count: 8
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000001, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000000, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Iter 000010 / 000010   Loss now: 0.58307076
, worker=telemetry
cont_msg=
, worker=telemetry
cont_msg=Region 82 Avg IOU: 0.530720, Class: 0.703183, Obj: 0.000259, No Obj: 0.000073, .5R: 0.785658, .75R: 0.071423,  count: 14
, worker=telemetry
cont_msg=Region 94 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000000, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Region 106 Avg IOU: 0.000000, Class: 0.000000, Obj: 0.000000, No Obj: 0.000000, .5R: 0.000000, .75R: 0.000000,  count: 0
, worker=telemetry
cont_msg=Saving weights to /sly_task_data/results/00000009/model.weights
, worker=telemetry
cont_msg=Epoch 000009 / 000010   Val loss now: 1.91197538
, worker=telemetry
cont_msg=
, worker=telemetry
MODEL_SAVED
model_id=508004, model_hash=h/i/yN/QyLbqyai9grdl9JEEGSbAkGmNqVWKfs7A9ZJzXWrr9ztoIBvsad70gWzfEPAWED5v487IwZSpe03fINNhGJrWaooaXUAnOrTxFdOSFVXGQh5Cih73UCMdSD2vHb6.tar, model_config={"settings":{"batch_size":{"train":8,"val":1},"bn_momentum":0.01,"dataset_tags":{"train":"train","val":"val"},"data_workers":{"train":2,"val":1},"enable_augmentations":false,"epochs":10,"gpu_devices":[0],"input_size":{"width":416,"height":416},"lr":0.0001,"print_every_iter":5,"subdivisions":{"train":1,"val":1},"weights_init_type":"transfer_learning","checkpoint_every":1,"recompute_anchors":false},"out_classes":[{"title":"apple","shape":"rectangle","color":"#1BF8F1","geometry_config":{}}],"class_title_to_idx":{"apple":0}}, worker=telemetry
cont_msg=Ok, training is finished.
, worker=telemetry
cont_msg=Good luck.
, worker=telemetry
STEP_DONE
step=MAIN, worker=telemetry
BEFORE_STEP
step=UPLOAD, worker=telemetry
ARCHIVE_UPLOADED
worker=telemetry
NN_UPLOADED
nn_id=508004, nn_hash=h/i/yN/QyLbqyai9grdl9JEEGSbAkGmNqVWKfs7A9ZJzXWrr9ztoIBvsad70gWzfEPAWED5v487IwZSpe03fINNhGJrWaooaXUAnOrTxFdOSFVXGQh5Cih73UCMdSD2vHb6.tar, worker=telemetry
STEP_DONE
step=UPLOAD, worker=telemetry
TASK_END
worker=telemetry
WAIT_FOR_TASK_LOG
worker=telemetry
REMOVE_TASK_TEMP_DATA IF NECESSARY
exit_status=<TaskTrain name='TaskTrain-3' pid=49 parent=6 stopped exitcode=0 daemon>, exit_code=0, worker=telemetry
TASK_REMOVED
exit_status=<TaskTrain name='TaskTrain-3' pid=49 parent=6 stopped exitcode=0 daemon>, exit_code=0, worker=telemetry
GET_NEW_TASK
received_task_id=236498, worker=telemetry
`;
