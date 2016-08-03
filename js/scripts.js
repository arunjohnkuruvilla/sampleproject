$( function() {
    var availableTags = [
        { 
            label: "Calculus Early Transcendentals", 
            value: "Calculus, Early Transcendentals - 8th edition",
            name: "Calculus, Early Transcendentals - 8th edition",
            publisher: "Brooks/Cole Publishing Co.",
            image: 'calculus.gif',
            summary: " Success in your calculus course starts here! James Stewart's CALCULUS:   EARLY TRANSCENDENTALS texts are world-wide best-sellers for a reason:   they are clear, accurate, and filled with relevant, real-world examples.   With CALCULUS: EARLY TRANSCENDENTALS, Eighth Edition, Stewart conveys   not only the utility of calculus to help you develop technical   competence, but also gives you an appreciation for the intrinsic beauty   of the subject. His patient examples and built-in learning aids will   help you build your mathematical confidence and achieve your goals in   the course."
        },
        { 
            label: "Chemical Principles Quest for Insight", 
            value: "Chemical Principles : Quest for Insight - 7th edition",
            name: "Chemical Principles : Quest for Insight - 7th edition",
            publisher: "W.H. Freeman",
            image: 'chemical_principles.gif',
            summary: "Written for calculus-inclusive general chemistry courses, Chemical Principles helps  students develop chemical insight by showing the connections between  fundamental chemical ideas and their applications. Unlike other texts,  it begins with a detailed picture of the atom then builds toward  chemistry’s frontier, continually demonstrating how to solve problems,  think about nature and matter, and visualize chemical concepts as  working chemists do. It also offers an exceptional level of support to  help students develop their mathemetical and problem-solving skills. "
        },
        { 
            label: "Algebra and Trigonometry", 
            value: "Algebra and Trigonometry - 4th edition",
            name: "Algebra and Trigonometry - 4th edition",
            publisher: "Cengage Learning",
            image: "algebra.gif",
            summary: " This bestselling author team explains concepts simply and clearly,   without glossing over difficult points. Problem solving and mathematical   modeling are introduced early and reinforced throughout, providing   students with a solid foundation in the principles of mathematical   thinking. Comprehensive and evenly paced, the book provides complete   coverage of the function concept, and integrates a significant amount of   graphing calculator material to help students develop insight into   mathematical ideas. The authors' attention to detail and clarity--the   same as found in James Stewart's market-leading Calculus book--is what   makes this book the market leader."
        },
        { 
            label: "Art of Public Speaking", 
            value: "Art of Public Speaking - 11th edition",
            name: "Art of Public Speaking - 11th edition",
            publisher: "Stephen E. Lucas",
            image: "public.gif",
            summary: "The Art of Public Speaking 11e continues to define the art of being the best by helping today's students become capable, responsible speakers and thinkers. With a strong focus on the practical skills of public speaking and grounded in classical and contemporary theories of rhetoric, The Art of Public Speaking offers full coverage of all major aspects of speech preparation and presentation. "
        },
    ];
    $( "#tags" ).autocomplete({
        source: availableTags,
        select: function( event, ui ) {
            $('#bookDetail').hide();
            $('#projectName').html(ui.item.name);
            $('#bookImage').attr("src", "./img/books/"+ui.item.image);
            $('#bookImage').attr("alt", ui.item.name);
            $('#bookSummary').html(ui.item.summary);
            $('#bookDetail').show();
        }
    });
} );


            (function() {
                // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
                if (!String.prototype.trim) {
                    (function() {
                        // Make sure we trim BOM and NBSP
                        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                        String.prototype.trim = function() {
                            return this.replace(rtrim, '');
                        };
                    })();
                }

                [].slice.call( document.querySelectorAll( 'input.input__field2' ) ).forEach( function( inputEl ) {
                    // in case the input is already filled..
                    if( inputEl.value.trim() !== '' ) {
                        classie.add( inputEl.parentNode, 'input--filled' );
                    }

                    // events:
                    inputEl.addEventListener( 'focus', onInputFocus );
                    inputEl.addEventListener( 'blur', onInputBlur );
                } );

                function onInputFocus( ev ) {
                    classie.add( ev.target.parentNode, 'input--filled' );
                }

                function onInputBlur( ev ) {
                    if( ev.target.value.trim() === '' ) {
                        classie.remove( ev.target.parentNode, 'input--filled' );
                    }
                }
            })();
