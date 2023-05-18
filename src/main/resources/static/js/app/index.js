let main = {
  init: function () {
    $("#btn-save").on("click", () => {
      this.save();
    });
    $("#btn-update").on("click", () => {
      this.update();
    });
    $("#btn-delete").on("click", () => {
      this.delete();
    });
  },
  save: function () {
    let data = {
      title: $("#title").val(),
      author: $("#author").val(),
      content: $("#content").val(),
    };

    // alert(JSON.stringify(data));
    $.ajax({
      type: "POST",
      url: "/api/v1/posts",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
    })
      .done(() => {
        alert("save complete.");
        window.location.href = "/";
      })
      .fail((error) => {
        alert(JSON.stringify(error));
      });
  },
  update: function () {
    let data = {
      title: $("#title").val(),
      content: $("#content").val(),
    };
    console.log(JSON.stringify(data));

    let id = $("#id").val();
    console.log(JSON.stringify(id));
    $.ajax({
      type: "PUT",
      url: "/api/v1/posts/" + id,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
    })
      .done(() => {
        alert("update complete.");
        window.location.href = "/";
      })
      .fail((error) => {
        alert(JSON.stringify(error));
      });
  },
  delete: function () {
    let id = $("#id").val();
    console.log(JSON.stringify(id));
    $.ajax({
      type: "DELETE",
      url: "/api/v1/posts/" + id,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
    })
      .done(() => {
        alert("delete complete.");
        window.location.href = "/";
      })
      .fail((error) => {
        alert(JSON.stringify(error));
      });
  },
};

main.init();
