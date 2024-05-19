


function Tabs(){
    // Загружаем содержимое страницы home.html и отображаем его в main-content
    $.ajax({
        url: 'Views/tabs.html', // Путь к файлу home.html
        type: 'GET',
        dataType: 'html',
        success: function(response) {
            $('.KJI_main_tabs').empty();
            $('.KJI_main_tabs').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error loading page:', error);
        }
    });
}


function StartSteps(){
    // Загружаем содержимое страницы home.html и отображаем его в main-content
    $.ajax({
        url: 'Views/steps_filing_an_application.html', // Путь к файлу home.html
        type: 'GET',
        dataType: 'html',
        success: function(response) {
            $('.KJI_main_start_state').empty();
            $('.KJI_main_start_state').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error loading page:', error);
        }
    });
}
function FirstSteps(){
    // Загружаем содержимое страницы home.html и отображаем его в main-content
    $.ajax({
        url: 'Views/first-steps-terms_of_participation.html', // Путь к файлу home.html
        type: 'GET',
        dataType: 'html',
        success: function(response) {
            $('.KJI_main-container_steps').empty();
            $('.KJI_main-container_steps').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error loading page:', error);
        }
    });
}
function SecondSteps(){
    // Загружаем содержимое страницы home.html и отображаем его в main-content
    $.ajax({
        url: 'Views/second-steps-personal_data.html', // Путь к файлу home.html
        type: 'GET',
        dataType: 'html',
        success: function(response) {
            $('.KJI_main-container_steps').empty();
            $('.KJI_main-container_steps').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error loading page:', error);
        }
    });
}
function ThirdSteps(){
    // Загружаем содержимое страницы home.html и отображаем его в main-content
    $.ajax({
        url: 'Views/third-steps-changes-deposits.html', // Путь к файлу home.html
        type: 'GET',
        dataType: 'html',
        success: function(response) {
            $('.KJI_main-container_steps').empty();
            $('.KJI_main-container_steps').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error loading page:', error);
        }
    });
}