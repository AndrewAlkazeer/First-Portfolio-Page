// jQuery code for smooth scrolling //

$(document).ready(() => {

    $('.bbuttonn').on('click', event => {

        $('.testdiv').css({ backgroundColor: 'green', width: '500px' }).toggle().fadeIn(2000);

    })

    

    // Smooth scrolling on Reveal using JS script

    
});

// Angular Code for changing color

angular.module('app1', []).controller('cont', ['$scope', function ($scope) {

    $scope.btn = () => {

        $scope.colors = [
            {
                backgroundColor: 'red'
            },
            {
                color: 'magenta'
            },
            {
                color: 'green'
            },
            {
                color: 'yellow'
            },
            {
                color: 'orange'
            }
        ];

        // class = titlee, span



        // $scope.changeColors = colors[Math.floor(Math.random() * colors.length)]; 

        $('a, span, .titlee').toggleClass('changecolor-class');

    }


}])