<template>
  <div>
    <div class="data">
      <div>
        <b-button>Button</b-button>
        <b-button variant="danger">Button</b-button>
        <b-button variant="success">Button</b-button>
        <b-button variant="outline-primary">Button</b-button>
      </div>
    </div>
    <div class="data">
      <div>
        <!-- Using modifiers -->
        <b-button v-b-toggle.collapse-2 class="m-1">Toggle Collapse</b-button>

        <!-- Using value -->
        <b-button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</b-button>

        <!-- Element to collapse -->
        <b-collapse id="collapse-2">
          <b-card>I am collapsible content!</b-card>
        </b-collapse>
      </div>
    </div>
    <div class="data">
      <div>
        <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="data">
      <div>
        <label for="example-datepicker">Choose a date</label>
        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
        <p>Value: '{{ value }}'</p>
      </div>
    </div>
    <div class="data">
      <div>
        <!-- Styled -->
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

        <!-- Plain mode -->
        <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
        <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>
      </div>
    </div>
    <div class="data">
      <div>
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      file: null,
      file2: null
    };
  }
};
</script>

<style lang="scss" scoped>
.data {
  padding: 1rem 0 1rem 0;
}
</style>