$(document).ready(function() {
    $('.js-load-posts').on('click', function() {
        // get all blog data
        $.get('/api/blog').done(function(data) {
            // use blog data to append a blog post for each item in the data
            $.each(data, function(key, post) {
                $('#posts').append('<div data-id="' + post.id + '"class="post"><h2>'+ post.title + '</h2><h4>' + post.author + '</h4><hr></div>')
            });
            // after all blog posts have been added, attach an event for each oen of them
            $('.post').on('click', function() {
                // get the id for the post that was just clicked
                var id = $(this).data('id');
                // get the data for that specific blog post
                $.get('/api/blog/' + id).done(function(data) {
                    // display the DOM elements in the model to display the current blog post data
                    $('.modal-title').html(data.title);
                    $('.js-author').html(data.first_name + ' ' + data.last_name);
                    $('.js-date').html(data.date);
                    $('.js-content').html(data.content);
                    $('.modal').modal();
                });
            })
        })
    })

    $('.js-new-post-form').on('submit', function(e) {
        e.preventDefault(); // when get submit event, don't actually submit it
        var formData = $(this).serialize(); // change this information into a variable
        console.log(formData);
        $('.js-new-post-form .btn').attr('disabled', 'disabled').addClass('disabled');
        $.post({
            url: '/api/new',
            data: formData,
        })
        .always(function() {
            $('.js-new-post-form .btn').removeAttr('disabled').removeClass('disabled');
        })
        .fail(function() {
            alert('Failed to submit form. Please try again!');
        })
        .done(function() {
            alert('Thanks!');
            window.location = '/'; // redirects them to the homepage
            // $('.js-new-post-form').clear(); -- clears the form
        })
        // send the formData to the server with $.ajax here
    })
})
