<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input v-model="text" label="Add Document name here!!" rounded outlined>
        <template v-slot:append>
          <q-icon name="close" class="cursor-pointer" @click="text = ''" />
        </template>
      </q-input>
      <div class="q-pa-md">
        <q-uploader
          url="http://localhost:4444/upload"
          label="Custom header"
          multiple
        >
          <template v-slot:header="scope">
            <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
              <q-btn
                v-if="scope.queuedFiles.length > 0"
                icon="clear_all"
                round
                dense
                flat
                @click="scope.removeQueuedFiles"
              >
                <q-tooltip>Clear All</q-tooltip>
              </q-btn>
              <q-btn
                v-if="scope.uploadedFiles.length > 0"
                icon="done_all"
                round
                dense
                flat
                @click="scope.removeUploadedFiles"
              >
                <q-tooltip>Remove Uploaded Files</q-tooltip>
              </q-btn>
              <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
              <div class="col">
                <div class="q-uploader__title">Upload your files</div>
                <div class="q-uploader__subtitle">
                  {{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}
                </div>
              </div>
              <q-btn
                v-if="scope.canAddFiles"
                type="a"
                icon="add_box"
                round
                dense
                flat
              >
                <q-uploader-add-trigger />
                <q-tooltip>Pick Files</q-tooltip>
              </q-btn>
              <q-btn
                v-if="scope.canUpload"
                icon="cloud_upload"
                round
                dense
                flat
                @click="scope.upload"
              >
                <q-tooltip>Upload Files</q-tooltip>
              </q-btn>

              <q-btn
                v-if="scope.isUploading"
                icon="clear"
                round
                dense
                flat
                @click="scope.abort"
              >
                <q-tooltip>Abort Upload</q-tooltip>
              </q-btn>
            </div>
          </template>
        </q-uploader>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
