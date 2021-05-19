<script>
export default /*#__PURE__*/ {
  name: "VueTableSf", // vue component name
  props: {
    userCount: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      api_url: `https://randomuser.me/api/0.6/?results=${this.userCount}`,
      users: {},
    };
  },
  created() {
    this.getUsers();
  },
  mounted() {},
  methods: {
    capitalizeFirstLetter(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
    getUsers() {
      fetch(this.api_url)
        .then((response) => response.json())
        .then((data) => (this.users = data));
    },
  },
};
</script>

<template>
  <div class="vue-table-sf">
    <div>
      <table id="userTable">
        <tr class="header">
          <th style="width: 2%">Title</th>
          <th style="width: 5%">Name</th>
          <th style="width: 15%">Address</th>
          <th style="width: 5%">E-mail</th>
          <th style="width: 5%">Mobile</th>
          <th style="width: 5%">Nationality</th>
          <th style="width: 5%">Avatar</th>
        </tr>
        <tr v-for="(item, key) in users.results" :key="key">
          <td>
            {{ capitalizeFirstLetter(item["user"]["name"]["title"]) }}
          </td>
          <td>
            <strong>
              {{
                capitalizeFirstLetter(item["user"]["name"]["first"]) +
                " " +
                capitalizeFirstLetter(item["user"]["name"]["last"])
              }}</strong
            >
          </td>
          <td>
            {{
              item["user"]["location"]["street"] +
              " ," +
              item["user"]["location"]["county"] +
              " ," +
              item["user"]["location"]["state"] +
              " ," +
              item["user"]["location"]["city"]
            }}
          </td>
          <td>
            {{ item["user"]["email"] }}
          </td>
          <td>
            {{ item["user"]["cell"] }}
          </td>
          <td>
            {{ item["user"]["nationality"] }}
          </td>
          <td>
            <img
              :src="item['user']['picture']['thumbnail']"
              alt="Avatar"
              class="avatar"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

#userTable {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
}

#userTable th,
#userTable td {
  text-align: left;
  padding: 5px;
}

#userTable tr {
  border-bottom: 1px solid #ddd;
}

#userTable tr.header,
#userTable tr:hover {
  background-color: #f1f1f1;
}

.avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
