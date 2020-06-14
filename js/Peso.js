$(function() {

    $('#weight').mask('')
    $('#height').mask('')

    $('#peso-form').submit(function(event) {
        event.preventDefault();

    }).validate({
        rules: {
            peso: {
                required: true,
                number: true
            },
            altura: {
                required: true,
                number: true
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
                $('#weight').val('')
                $('#height').val('')
            })
        }
    });
})