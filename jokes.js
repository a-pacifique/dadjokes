const jokes = [
    "Why did the lampshade refuse to eat breakfast? It wanted to avoid a light meal!",
    "What did the painting say to the sculpture? 'Let's hang out together!'",
    "Why did the tree bring a calculator to the party? It wanted to branch out its math skills!",
    "How did the potato win the race? It used its 'eyes' on the prize!",
    "What do you call a cat that likes to bowl? A strike feline!",
    "Why did the computer go to the doctor? It had a virus that needed a byte of help!",
    "How did the invisible man propose to his girlfriend? He gave her a transparent ring!",
    "What did the raindrop say to the cloud? 'I'm falling for you!'",
    "Why did the tomato turn blue? It was feeling a bit saucy!",
    "What did the blanket say to the pillow? 'I've got you covered!'",
    "Why did the baker go to therapy? He had too many emotional doughs!",
    "What do you call a fly without wings? A walkie-buzzie!",
    "How did the bicycle find its way home? It followed the cycle path!",
    "Why did the coffee file a police report? It got mugged!",
    "What do you call a dog that can do magic tricks? A Labracadabrador!",
    "Why did the smartphone go on a diet? It wanted to shed some app-lbs!",
    "How did the ocean greet the beach? With a big wave!",
    "Why did the broom take a vacation? It needed to sweep away the stress!",
    "What do you call a bee that can't make up its mind? A maybee!",
    "How did the cucumber win the race? It pickled up the pace!",
    "Why did the chicken become an architect? It wanted to build its coop dream home!",
    "What do you call a snowman with a great sense of humor? A punny frosty!",
    "Why did the tomato get a job as a detective? It wanted to ketchup on all the mysteries!",
    "What did the banana say to the orange? 'You're a-peeling!'",
    "How did the mirror reply when asked about its reflection? 'I'll reflect on that!'",
    "Why did the music note go to school? It wanted to become an A-sharp student!",
    "What do you call a singing laptop? A Dell-ightful performer!",
    "Why did the bicycle fall over? It was two-tired!",
    "How did the garden gnome solve the mystery? By gnome-ing the truth!",
    "What did the sushi chef say to the fish? 'I'm a big fan of your raw talent!'",
    "Why did the light bulb break up with the lamp? They just couldn't see eye to socket!",
    "How did the skateboard become popular? It gained some serious street cred!",
    "What do you call a snobbish criminal going downstairs? A condescending con descending!",
    "Why did the calendar go on a diet? It had too many dates!",
    "How did the hat greet the socks? With a warm head and cold feet!",
    "What did the stamp say to the envelope? 'Stick with me, we'll go places!'",
    "Why did the artist bring a ladder to the gallery? To reach new heights of creativity!",
    "How did the firefly win the talent show? It had a glowing performance!",
    "What do you call a vegetable that tells jokes? A corny comedian!",
    "Why did the cat take a nap on the computer? It wanted to catch up on some mouse clicks!",
    "How did the astronaut organize their party? They planned it in 'orbit'!",
    "What do you call a lazy kangaroo? A pouch potato!",
    "Why did the tomato blush when it looked in the mirror? It saw its own saucy reflection!",
    "How did the music conductor communicate with the orchestra? They waved baton-tacts!",
    "What did the ocean say to the beachgoer? 'Sea you later!'",
    "Why did the chicken become a chef? It wanted to become a master of poultry!",
    "How did the book make the library feel? It left them 'booked' with joy!",
    "What do you call a dinosaur that can't stop telling jokes? A laugh-a-saurus!",
    "Why did the computer go to the doctor? It had a bad case of cookies!",
    "How did the balloon propose to its sweetheart? It said, 'I'm floating with love for you!'",
    "Why did the cookie go to the dentist? It needed a filling!",
    "What do you call a dinosaur with an extensive vocabulary? A thesaurus!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "Why did the scarecrow win an award? Because it was outstanding in its field!",
    "Why did the tomato turn green? Because it saw the salad dressing!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "Why did the math book look sad? Because it had too many problems!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why did the scarecrow win an award? Because it was outstanding in its field!",
    "Why did the tomato blush? Because it saw the salad dressing!",
    "Why did the chicken go to the seance? To talk to the other side!",
    "Why was the math book sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "What did the grape do when it got stepped on? It let out a little wine!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "How do you make a tissue dance? Put a little boogie in it!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "Why did the cookie go to the doctor? It was feeling crumby!",
    "What did the left eye say to the right eye? Between you and me, something smells!",
    "Why did the banana go to the doctor? Because it wasn't peeling well!",
    "How do you organize a space party? You 'planet'!",
    "What do you call a pile of cats? A meowtain!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't melons get married? Because they cantaloupe!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did the ocean say to the beach? Nothing, it just waved!",
    "How do you catch a runaway dog? Hide behind a tree and bark loudly!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "How do you make a tissue dance? Put a little boogie in it!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "What did the left eye say to the right eye? Between you and me, something smells!",
    "Why did the banana go to the doctor? Because it wasn't peeling well!",
    "How do you organize a space party? You 'planet'!",
    "Why did the tomato blush? Because it saw the salad dressing!",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
    "Why did the coffee file a police report? It got mugged!",
    "What do you call a dog that can do magic tricks? A Labracadabrador!",
    "Why did the smartphone go on a diet? It wanted to shed some app-lbs!",
    "How did the ocean greet the beach? With a big wave!",
    "Why did the broom take a vacation? It needed to sweep away the stress!",
    "What do you call a bee that can't make up its mind? A maybee!",
    "How did the cucumber win the race? It pickled up the pace!",
    "Why did the chicken become an architect? It wanted to build its coop dream home!",
    "What do you call a snowman with a great sense of humor? A punny frosty!",
    "Why did the tomato get a job as a detective? It wanted to ketchup on all the mysteries!",
  ];
  
        // Footer
        const footer = document.createElement("footer");
        footer.style.position = "fixed";
        footer.style.bottom = "0";
        footer.style.left = "0";
        footer.style.width = "100%";
        footer.style.backgroundColor = "#f2f2f2";
        footer.style.padding = "10px";
        footer.style.textAlign = "center";
        
        const copyrightText = document.createElement("span");
        copyrightText.innerText = "© 2023 1445 Enterprise. All rights reserved. ";
        
        const companyName = document.createElement("span");
        companyName.innerText = "Greatest Jokes. ";
        
        const twitterIcon = document.createElement("a");
        twitterIcon.href = "https://twitter.com/1445enterprise";
        twitterIcon.target = "_blank";
        twitterIcon.innerHTML = `<i class="fab fa-twitter"></i>`;
        
        footer.appendChild(companyName);
        footer.appendChild(twitterIcon);
        footer.appendChild(document.createTextNode(" | "));
        footer.appendChild(copyrightText);
        document.body.appendChild(footer);
        
          