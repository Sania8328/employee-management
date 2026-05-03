<template>
  <div class="container mt-4">
    <h2 class="text-center">Employee Management</h2>

    <EmployeeForm 
      :employee="employee" 
      :isEdit="isEdit"
      @save="saveEmployee"
    />

    <EmployeeTable 
      :employees="employees"
      @edit="editEmployee"
      @delete="deleteEmployee"
    />
  </div>
</template>

<script>
import EmployeeForm from "./components/EmployeeForm.vue"
import EmployeeTable from "./components/EmployeeTable.vue"
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "./services/api"

export default {
  components: { EmployeeForm, EmployeeTable },

  data() {
    return {
      employees: [],
      employee: {},
      isEdit: false,
      editId: null
    }
  },

  mounted() {
    this.fetchEmployees()
  },

  methods: {
    async fetchEmployees() {
      const res = await getEmployees()
      this.employees = res.data
    },

    async saveEmployee(emp) {
      if (this.isEdit) {
        await updateEmployee(this.editId, emp)
      } else {
        await addEmployee(emp)
      }
      this.reset()
      this.fetchEmployees()
    },

    editEmployee(emp) {
      this.employee = emp
      this.isEdit = true
      this.editId = emp.id
    },

    async deleteEmployee(id) {
      await deleteEmployee(id)
      this.fetchEmployees()
    },

    reset() {
      this.employee = {}
      this.isEdit = false
    }
  }
}
</script>