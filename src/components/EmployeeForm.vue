<template>
  <form @submit.prevent="handleSubmit" class="card p-3 mb-4">
    <div class="row">
      <div class="col"><input v-model="localEmp.name" class="form-control" placeholder="Name" required /></div>
      <div class="col"><input v-model="localEmp.designation" class="form-control" placeholder="Designation" required /></div>
      <div class="col"><input v-model="localEmp.department" class="form-control" placeholder="Department" required /></div>
      <div class="col"><input v-model="localEmp.salary" type="number" class="form-control" placeholder="Salary" required /></div>
      <div class="col">
        <button class="btn btn-primary w-100">
          {{ isEdit ? "Update" : "Add" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["employee", "isEdit"],
  data() {
    return {
      localEmp: { ...this.employee }
    }
  },
  watch: {
    employee(newVal) {
      this.localEmp = { ...newVal }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit("save", this.localEmp)
    }
  }
}
</script>