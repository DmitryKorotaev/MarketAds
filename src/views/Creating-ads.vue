<template>
  <div class="container">
    <form class="form3">
      <div class="d-flex justify-content-center mb-3 pb-1">
        <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i>
        <span class="h1 fw-bold mb-0">Новое объявление</span>
      </div>
      <label class="categories">Выберете категорию:</label>
      <div id="v-model-select" class="dropdown">
        <select v-model="selected">
          <option>Автомобили</option>
          <option>Недвижимость</option>
          <option>Электроника</option>
        </select>
      </div>
      <div class="form-group">
        <label for="Input1">Название объявления:</label>
        <input
          type="text"
          class="form-control border border-dark-subtle mb-3"
        />
      </div>
      <div class="form-group">
        <label id="Textarea1">Описание:</label>
        <textarea
          class="form-control border border-dark-subtle"
          id="Textarea1"
          rows="5"
        ></textarea>
      </div>

      <div class="container">
        <h2>Multiple Images Preview</h2>
        <hr />
        <div class="large-12 medium-12 small-12 cell">
          <label
            >Files
            <input
              type="file"
              id="multiple-image-preview-files"
              accept="image/*"
              multiple
              @change="handleFilesUpload($event)"
            />
          </label>
        </div>
        <div class="large-12 medium-12 small-12 cell">
          <div class="grid-x">
            <div
              v-for="(file, key) in files"
              v-bind:key="'file-' + key"
              class="large-4 medium-4 small-6 cell file-listing"
            >
              {{ file.name }}
              <img class="preview" v-bind:id="'image-' + parseInt(key)" />
            </div>
          </div>
        </div>
        <br />
        <div class="large-12 medium-12 small-12 cell clear">
          <button v-on:click="addFiles()">Add Files</button>
        </div>
        <br />
        <div class="large-12 medium-12 small-12 cell">
          <button v-on:click="submitFiles()">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "",
      title: "",
      discriptoin: "",
      files: [],
    };
  },

  methods: {
    /*
				Adds a file
			*/
    addFiles() {
      document.getElementById("multiple-image-preview-files").click();
    },

    /*
				Submits files to the server
			*/
    submitFiles() {
      /*
					Initialize the form data
				*/
      let formData = new FormData();

      /*
					Iterate over any file sent over appending the files
					to the form data.
				*/
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);
      }

      /*
					Make the request to the POST /select-files URL
				*/
      axios
        .post("/file-multiple-preview", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },

    /*
				Handles the uploading of files
			*/
    handleFilesUpload(event) {
      /*
					Get the uploaded files from the input.
				*/
      let uploadedFiles = event.target.files;

      /*
					Adds the uploaded file to the files array
				*/
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }

      /*
					Generate image previews for the uploaded files
				*/
      this.getImagePreviews();
    },

    /*
				Gets the preview image for the file.
			*/
    getImagePreviews() {
      /*
					Iterate over all of the files and generate an image preview for each one.
				*/
      for (let i = 0; i < this.files.length; i++) {
        /*
						Ensure the file is an image file
					*/
        if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {
          /*
							Create a new FileReader object
						*/
          let reader = new FileReader();

          /*
							Add an event listener for when the file has been loaded
							to update the src on the file preview.
						*/
          reader.addEventListener(
            "load",
            function () {
              document.getElementById("image-" + parseInt(i)).src =
                reader.result;
            }.bind(this),
            false
          );

          /*
							Read the data for the file in through the reader. When it has
							been loaded, we listen to the event propagated and set the image
							src to what was loaded from the reader.
						*/
          reader.readAsDataURL(this.files[i]);
        }
      }
    },
  },
};
</script>

<style>
.dropdown {
  margin-bottom: 30px;
}
.categories {
  margin-bottom: 10px;
}

input[type="file"] {
  position: absolute;
  top: -500px;
}

div.file-listing img {
  max-width: 90%;
}
</style>
