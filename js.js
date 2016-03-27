   var quotes = [

         "Your focus determines your reality.", "Do. Or do not. There is no try.", "Somebody has to save our skins.", "In my experience there is no such thing as luck.", "I find your lack of faith disturbing.", "I’ve got a bad feeling about this.", "It’s a trap!", "So this is how liberty dies…with thunderous applause.", "Your eyes can deceive you. Don’t trust them.", "Never tell me the odds.", "Mind tricks don’t work on me.", "Great, kid. Don’t get cocky.", "Stay on target.", "This is a new day, a new beginning."

   ];

   var author = ["Qui-Gon Jinn", "Yoda", "Leia Organa", "Obi-Wan Kenobi", "Darth Vader", "Basically everyone", "Admiral Ackbar", "Padmé Amidala", "Obi-Wan Kenobi", "Han Solo", "Watto", "Han Solo", "Gold Five", "Ahsoka Tano",


];

   $(document).ready(function () {


       $("#new-quote").on('click', function () {
           var rand = Math.floor(Math.random() * quotes.length);
           $("#randomQuote").text(quotes[rand]);
           $("#author").text(author[rand]);

       });






   });