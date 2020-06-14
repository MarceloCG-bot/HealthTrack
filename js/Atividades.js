$(() => {

    $('#activity_duration').mask('00:00')
    $('#date').mask('00/00/0000')

    $('#activity-form').submit(function(e) {
        e.preventDefault();
    }).validate({
        rules: {
            nome: {
                required: true,
            },
            tempo: {
                required: true,
            },
            data: {
                required: true,
            }
        },
        submitHandler: function(form) {
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Registro realizado com sucesso',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                $('#name').val('')
                $('#activity_duration').val('')
                $('#date').val('')
            })
        }
    });
})