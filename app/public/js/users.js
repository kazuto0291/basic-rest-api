// 即時関数でモジュール化

// const { json } = require("body-parser")

const usersModule = (() => {
  const BASE_URL = "http://localhost:3000/api/v1/users"

  // ヘッダーの設定
  const headers = new Headers()
  headers.set("Content-Type", "application/json")

  return {
    fetchAllUsers: async () => {
      const res = await fetch(BASE_URL)
      const users = await res.json()
      for (let i = 0; i < users.length; i++) {
        const user =users[i];
        const body = `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.profile}</td>
                        <td>${user.date_of_birth}</td>
                        <td>${user.created_at}</td>
                        <td>${user.update_at}</td>
                      </tr>`
        document.getElementById("users-list").insertAdjacentHTML('beforeend',body)


      }
    },
    createUser: async () => {
      const name = document.getElementById('name').value;
      const profile = document.getElementById('profile').value;
      const dateOfBirth = document.getElementById('date-of-birth').value;

      // リクエストのbody作成
      const body = {
        name : name,
        profile: profile,
        date_of_birth: dateOfBirth
      }

      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body) //js形式をJSON型に変更
      })

      const resJson = await res.json()

      alert(resJson.message)
      window.location.href = "/"
    },
    saveUser: async (uid) => {
      const name = document.getElementById("name").value;
      const profile = document.getElementById("profile").value;
      const dateOfBirth = document.getElementById("date-of-birth").value;

      // リクエストのbody作成
      const body = {
        name : name,
        profile : profile,
        date_of_birth: dateOfBirth
      }

      // fetchメソッドを投げる
      const res = await fetch(BASE_URL + "/" + uid, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body)
      })

      // 受け取ったresをJSONに変換
      const resJson = await res.json()

      alert(resJson.message)
      window.location.href = "/"
    }
  }
})()

// console.log(usersModule.fetchAllUsers())