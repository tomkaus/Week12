// API endpoint for fetching and interacting with veteran data
const URL_ENDPOINT = 'http://localhost:3000/vetRoster'

// Fetch veteran data and populate the table
$.get(URL_ENDPOINT).then(data => {
  data.map(vet => {
    $('tbody').append(
      $(`
      <tr>
      <td>${vet.id}</td>
        <td>${vet.fullName}</td>
        <td>${vet.branch}</td>
        <td>
          <button onclick="deleteUser(${vet.id})">🗑</button>
        </td>
      </tr>
      `)
    )

    })
})

// Event handler for submitting a new veteran
$('#submitVet').click(function () {
  $.post(URL_ENDPOINT,{
    fullName: $('#fullName').val(),
    branch: $('#newBranch').val(),
  })
})

// Function for deleting a veteran
function deleteUser (id) {
  $.ajax(`${URL_ENDPOINT}/${id}`, {
  type: 'DELETE'
})
}

// Function for updating a veteran
function updateUser() {
  let id = $('#updateId').val()

  $.ajax(`${URL_ENDPOINT}/${id}`,{
    method: 'PUT',
    data: {
      fullName: $('#updateName').val(),
      branch: $('#updateBranch').val(),
    }
  })
}

// Event handler for updating a veteran
$('#updateVet').click(updateUser)
