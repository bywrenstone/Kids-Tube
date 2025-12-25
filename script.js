
/* ================================
   VIDEO DATABASE (AUTO-DEDUPED)
================================ */

//2,205 TOTAL VIDEOS

const RAW_VIDEO_LIST = [
    // Bluey 50 VIDS
    { id: "h7sBLY6vXLU", title: "Bluey — Pass The Parcel" },
    { id: "5t9Rvrtc-Xc", title: "Bluey — Hotel & Asparagus" },
    { id: "ozCHY9GFL00", title: "Bluey - 2 HOURS of Bluey Christmas Moments, and Much More! 🤩 🎅 ✨ " },
    { id: "gNxblcdmq3s", title: "Bluey - Muffin's Toy Review! 💜 🎁 | Muffin Unboxing FULL BLUEY MINISODE and More! 👀" },
    { id: "SvFv1e47K1g", title: "Bluey - Party Mode with Bluey and Friends! 🥳 💙 | FULL EPISODES + More Adventures 🌟" },
    { id: "NNofr2nkZT0", title: "Bluey - Little Mackenzie 🥹 ✨ | Space Episode Moment + MORE Bluey Adventures with Friends! 💙" },
    { id: "V0k32eMIeBY", title: "Bluey - Playing with Presents 🎁 💙" },
    { id: "3j44m2EqZrY", title: "Bluey - Rad and Frisky's Wedding 💒 💍 | 30 MINUTES The Sign Moment AND More Bluey Fun! 💙 ✨" },
    { id: "dSgJn5Gd9hk", title: "Bluey - EVERY EPISODE of Bluey Cookalongs! 😋 🍽️ | 30 MINUTES of Bluey Family Cooking and Recipes 💙" },
    { id: "no_JEY_doSQ", title: "Bluey - 18 FULL BLUEY EPISODES 💙 ✨ | 2 HOURS of Bluey Full Episodes 😯" },
    { id: "4X5UBti92Ak", title: "Bluey - Bluey Family Time! | FULL EPISODES + More" },
    { id: "Xw3-3jQQMBk", title: "Bluey - 18 FULL BLUEY EPISODES" },
    { id: "0RYe146FjJ8", title: "Bluey - NEW Season 1 Full Episodes" },
    { id: "T4uKrmq5i1U", title: "Bluey - Season 3 New Full Episodes" },
    { id: "SZ9PD-s2k4w", title: "Bluey - BEST Full Episodes from Season 2" },
    { id: "bO_Rg2tPjOI", title: "Bluey - Bluey's Sunny Spring Tales" },
    { id: "aP-qKaig84M", title: "Bluey - Bluey FULL Episodes Seasons 1-3" },
    { id: "Q73E0G4YkDs", title: "Bluey - Time For Family Fun! | Full Episodes" },
    { id: "I5oBzaxPtrI", title: "Bluey - It's Family Time! | Full Episode Compilation" },
    { id: "VPW9sK7YeV8", title: "Bluey - Best Season 1 Full Episodes" },
    { id: "FP3Ndq8m9oA", title: "Bluey - Bluey Compilation | Best of Season 3" },
    { id: "uscUfL7vrTo", title: "Bluey - Full Bluey Minisodes So Far" },
    { id: "_rbGVSENSzg", title: "Bluey - Ultimate Bluey Minisode Compilation" },
    { id: "uVn1n4f7AUw", title: "Bluey - Have a Bluey Little Christmas" },
    { id: "cqHlhcimJAk", title: "Bluey - Classic Bluey Moments" },
    { id: "4GvI7M8PyKs", title: "Bluey - Bluey's Adventures" },
    { id: "koiI9TKIBBI", title: "Bluey - Blue Mountains Hands Puppets!" },
    { id: "e8ULi9CC6os", title: "Bluey - Dad Baby | Full Episode" },
    { id: "Yrg4qjKZlMw", title: "Bluey - NEW Series 1, 2 & 3 Full Episodes" },
    { id: "h6lqJcJdy2s", title: "Bluey - LIVE: Bluey Full Episodes" },
    { id: "Lnlaynyoj6w", title: "Bluey - Most Exciting Bluey Moments" },
    { id: "4SlG2hEp9Wg", title: "Bluey - Time for Cheeky Bluey Moments" },
    { id: "LhaDbUfJ3gM", title: "Bluey - Wholesome Full Episodes + Minisodes" },
    { id: "eJ5K6TQ20HQ", title: "Bluey - Christmas with Bluey Fun" },
    { id: "xzz6dwKtbqI", title: "Bluey - Best Mini Episodes" },
    { id: "e-qFb6Q1IcY", title: "Bluey - Seasons 1 & 2 Full Episodes" },
    { id: "HHad5_bI5o0", title: "Bluey - Season 3 Full Episode Compilation" },
    { id: "4SlG2hEp9Wg", title: "Bluey - Cheeky Bluey Episodes" },
    { id: "VPW9sK7YeV8", title: "Bluey - LIVE: Best Season 1 Full Episodes" },
    { id: "4X5UBti92Ak", title: "Bluey - Family Time Full Episodes" },
    { id: "0RYe146FjJ8", title: "Bluey - Season 1 Full Episodes" },
    { id: "I5oBzaxPtrI", title: "Bluey - It's Family Time!" },
    { id: "Q73E0G4YkDs", title: "Bluey - Time For Family Fun!" },
    { id: "SZ9PD-s2k4w", title: "Bluey - Best Season 2 Episodes" },
    { id: "Yrg4qjKZlMw", title: "Bluey - Series 1, 2 & 3 Full Episodes" },
    { id: "e8ULi9CC6os", title: "Bluey - Dad Baby Full Episode" },
    { id: "T4uKrmq5i1U", title: "Bluey - Season 3 Full Episodes" },
    { id: "bO_Rg2tPjOI", title: "Bluey - Sunny Spring Tales" },

    // Sesame Street 30 VIDS
    { id: "5nriOLIIWJw", title: "Sesame Street — Explore Nature with Elmo" },
    { id: "HrXQW5SGooU", title: "Sesame Street — Elmo & Friends Go to School" },
    { id: "s0W38qGPozw", title: "Sesame Street — National Parks Adventure" },
    { id: "BUnvZg9YJLc", title: "Sesame Street - Let's Celebrate with Family!" },
    { id: "7mZF_-lr-8c", title: "Sesame Street — Elmo Searches for Letters and Numbers! | TWO Sesame Street Full Episodes" },
    { id: "W3XOWs70uwY", title: "Sesame Street — Let's Learn How to Measure with Elmo!📏" },
    { id: "cIWLTj09vQQ", title: "Sesame Street — Elmo's Dance Party!" },
    { id: "1OdKl-ekvQc", title: "Sesame Street — The Three Little Pigs with Elmo and Friends! 🐷🐷🐷" },
    { id: "gKCVJPTFCB4", title: "Sesame Street — Cook with Yellow Fruits & Vegetables!🍌🌽" },
    { id: "1I32RzPn6Xk", title: "Sesame Street — Elmo Songs About Friendship! | 1 HOUR Sesame Street Compilation!" },
    { id: "ey15OFV4YS4", title: "Sesame Street - Let's Learn Routines with Elmo!" },
    { id: "bxOKkiOKV0E", title: "Sesame Street - Thank You for Making a Difference" },
    { id: "TZEObQidVpg", title: "Sesame Street - Elmo's Animal ABC's Compilation" },
    { id: "mYnZw5XDu4E", title: "Sesame Street - Create Art & Music with Elmo!" },
    { id: "H1Grdy-o1x8", title: "Sesame Street - Elmo's Rainbow and Bubbles!" },
    { id: "kGuO6H98nFI", title: "Sesame Street - Elmo and Friends Fix the Gingerbread House!" },
    { id: "f7yZoPdhZ90", title: "Sesame Street - Elmo's Choo Choo | Goodnight, World! A Podcast for Kids with Headspace" },
    { id: "xDH9U3-iess", title: "Sesame Street - Let's Go to the Beach with Elmo & Friends!" },
    { id: "JTdygVOAITg", title: "Sesame Street - Elmo and Friends Find Dinosaurs on Sesame Street!" },
    { id: "gG8ZBGUMqEw", title: "Sesame Street - Mecha Builders Save the Bees, Ride the Bus, & MORE!" },
    { id: "ey15OFV4YS4", title: "Sesame Street - Let's Learn Routines with Elmo!" },
    { id: "bxOKkiOKV0E", title: "Sesame Street - Thank You for Making a Difference" },
    { id: "TZEObQidVpg", title: "Sesame Street - Elmo's Animal ABCs" },
    { id: "mYnZw5XDu4E", title: "Sesame Street - Create Art & Music with Elmo!" },
    { id: "H1Grdy-o1x8", title: "Sesame Street - Elmo's Rainbow and Bubbles!" },
    { id: "kGuO6H98nFI", title: "Sesame Street - Elmo and Friends Fix the Gingerbread House!" },
    { id: "xDH9U3-iess", title: "Sesame Street - Let's Go to the Beach with Elmo & Friends!" },
    { id: "cIWLTj09vQQ", title: "Sesame Street - Elmo's Dance Party!" },
    { id: "gKCVJPTFCB4", title: "Sesame Street - Cook with Yellow Fruits & Vegetables!" },
    { id: "1OdKl-ekvQc", title: "Sesame Street - The Three Little Pigs with Elmo and Friends!" },

    // Numberblocks 1 VIDS
    { id: "1R_E6KhWh7g", title: "Numberblocks & Sesame Street Friends" },

    // PBS Kids-Weather Hunters 2 VIDS
    { id: "7gSHqoEoyf0", title: "PBS Kids - Weather Hunters Full Episode Foggy Trick or Treat" },
    { id: "mhkEd_sOv9o", title: "PBS Kids - Weather Hunters Full Episode Finding Cumulus" },

    //SciShow kids 20 VIDS
    { id: "4VinwOQkHGg", title: "SciShow Kids - The Yuckiest Animals Kids Compilation" },
    { id: "8qdYCpSW2eY", title: "SciShow Kids - The Biggest Volcano Ever is in Space!" },
    { id: "RvRU_4XWPlw", title: "SciShow Kids - Solving Problems Around The Fort" },
    { id: "N2s7KjzcoKg", title: "SciShow Kids - Sea Monsters of The Past" },
    { id: "wyxWK8u1xjI", title: "SciShow Kids - Can You Guess The Animal with Jessie and Mister Brown?" },
    { id: "xChjmw7KfNw", title: "SciShow Kids - Wiggly Gelatin Treats! The Science of Food" },
    { id: "UqCQsKxq4mY", title: "SciShow Kids - Making a Foundtain of Soda! Summer Experiments" },
    { id: "_BluIksqEmM", title: "SciShow Kids - The Biggest Flower in The World! The Corpse Flower" },
    { id: "A7LU5Wxc_0Y", title: "SciShow Kids - Blobfish: The World's Ugliest Animal/ Biology For Kids" },
    { id: "tRxC4rlEQr8", title: "SciShow Kids - The Ancient Animal with a Bomerang Head!" },
    { id: "YR4wtGWK7eE", title: "SciShow Kids - Hawai i: Land of Volcanoes" },
    { id: "6WNHyAXIN8c", title: "SciShow Kids - How Ears Let Us Hear the World!" },
    { id: "TuY1NhrKIeM", title: "SciShow Kids - The Building Blocks of Earth: Rocks" },
    { id: "YNuc6isal8Q", title: "SciShow Kids - How Things Fly! " },
    { id: "vzl9EUypy2Q", title: "SciShow Kids - Think Like an Engineer: Juniper's Problem" },
    { id: "8FOl-jFusaM", title: "SciShow Kids - All About Teeth!" },
    { id: "VXINWLn57sE", title: "SciShow Kids - Mountains And Volcanoes!" },
    { id: "QCW0VQtQa-8", title: "SciShow Kids - Why Things Float!" },
    { id: "UOOkup9xigs", title: "SciShow Kids - The Very Big Story of the Dinosaur" },
    { id: "5eAJc8LR6Ns", title: "SciShow Kids - The Windiest Places on Earth" },

    //Sylvanian Fammilies 10 VIDS
    { id: "LiFrljdBcLQ", title: "Sylvanian Fammiles - All Of Mini Episodes Season 3 -Clover- #01~#12" },
    { id: "Ba86WzrYsHs", title: "Sylvanian Fammiles - Take a Look at the New Fun Nursery! 💕10 Minute Compilation" },
    { id: "6SEfoV4hXxs", title: "Sylvanian Fammiles - A Week in the Life of the Babies at Nursery 🤗💕Special Compilation" },
    { id: "j0y3KSuWxzA", title: "Sylvanian Fammiles - Abigail Doesn't Like Running 🥴Mini Episodes | Compilation" },
    { id: "p-EKmwLDlJA", title: "Sylvanian Fammiles - Dad's Freshly Baked Bread! 😋 Mini Episodes" },
    { id: "sFvea-6z_2U", title: "Sylvanian Fammiles - Freya Investigates 👀Mini Episodes Compilation" },
    { id: "z0UP6HFSgzs", title: "Sylvanian Fammiles - A Family Dance Masterclass 💃" },
    { id: "QyM0qQWkeug", title: "Sylvanian Fammiles - A Sparkly Clean Home! ✨" },
    { id: "ri-q2gfwuro", title: "Sylvanian Fammiles - A Day in the Life of the Persian Family 🐱💕" },
    { id: "9Wu1cQfdiL8", title: "Sylvanian Fammiles - Brotherly Love 💜 " },

    //Lingo Kids 10 VIDS
    { id: "e7srH_GmhMc", title: "Lingo Kids - Kids DAY 🎈 party songs ahead SONGS FOR KIDS 🎉" },
    { id: "S7g8bWGLSdg", title: "Lingo Kids - Seasons GREETINGS 💌 sing and smile SONGS FOR KIDS 💫" },
    { id: "pjbZ2qZfJRY", title: "Lingo Kids - LINGOKIDS TOP HITS OF 2021 🕺🔝🎶 The BEST SONGS FOR KIDS" },
    { id: "QLXSkaJnoJI", title: "Lingo Kids - ABC SONGS FOR KIDS 🔤 🎵 The Best Lingokids ABC songs" },
    { id: "QLXSkaJnoJI", title: "Lingo Kids - ACTION SONGS FOR KIDS 🙌🎶" },
    { id: "pcoNL1dblm0", title: "Lingo Kids - Spark CURIOSITY 🌟 CARTOONS for KIDS" },
    { id: "ypQR5j26ll8", title: "Lingo Kids - BABY BOT Adventures🤖: Fun Tech Learning with Lingokids!" },
    { id: "jG1_vuBr4hU", title: "Lingo Kids - Happy? No! Baby Bot is ANGRY! 😠😡 Cartoons for Kids" },
    { id: "pcoNL1dblm0", title: "Lingo Kids - Spark CURIOSITY 🌟 CARTOONS for KIDS" },
    { id: "QzTaPvIYexk", title: "Lingo Kids - ROBOTS FOR KIDS 🤖⚙️ Songs, Cartoons and More About Robots" },

    //Pororo 20 VIDS
    { id: "JhFGQ2mTLwY", title: "Pororo - Pororo Dinosaur Lab!🦖🦕" },
    { id: "sXVqCuNbvCk", title: "Pororo - Baryonyx | Explore Dinosaur Island with Pororo" },
    { id: "zp8BFf0e-Hw", title: "Pororo - Ceratosaurus | Explore Dinosaur Island with Pororo" },
    { id: "o-pl3mwih1Y", title: "Pororo - Elasmosaurus | Explore Dinosaur Island with Pororo" },
    { id: "x8oMNESHLGA", title: "Pororo - Velociraptor | Explore Dinosaur Island with Pororo" },
    { id: "Eucp-YncQnU", title: "Pororo - Stegosaurus | Explore Dinosaur Island with Pororo" },
    { id: "voEkcmSnMmM", title: "Pororo - Triceratops | Explore Dinosaur Island with Pororo" },
    { id: "SYT0SJkQ8JA", title: "Pororo - Ankylosaurus | Explore Dinosaur Island with Pororo" },
    { id: "QOR1xMEfKdg", title: "Pororo - Tyrannosaurus Rex | Explore Dinosaur Island with Pororo" },
    { id: "dZCP0TKWzD8", title: "Pororo - Brachiosaurus | Explore Dinosaur Island with Pororo" },
    { id: "ZbdQI9cmNeM", title: "Pororo - Brachiosaurus | Explore Dinosaur Island with Pororo" },
    { id: "_-7sJDD2bPM", title: "Pororo - Dino Pororo Dinosaur Hospital 🩺🦖 | Full Episodes Compilation" },
    { id: "Gf7lrbPwKQ8", title: "Pororo - Eat Healthy, Dinosaurs! | Healthy Story for Kids" },
    { id: "VQnN5s4R3kE", title: "Pororo - Five Baby Dinos Jumping on the Bed! " },
    { id: "QkCSa_KcRkE", title: "Pororo - Ouch! Some Bugs Bite🦟 | Dinosaur Story for Kids" },
    { id: "BC-2s5C8bEo", title: "Pororo - Zombie Dino Needs Help! 🧟‍♂️ | Pororo Dinosaur Hospital Story" },
    { id: "m4CzKAPAkxU", title: "Pororo - Find the Cavity Dino! 🦷 | Baby T-Rex at Pororo’s Dinosaur" },
    { id: "FMw2psEKW6w", title: "Pororo - Mommy T-Rex Has a Baby Egg! 🦖 | Pororo Dinosaur Hospital" },
    { id: "-SUM0lBUFBo", title: "Pororo - Flying Dinosaur Rescue! | Pororo Dinosaur Rescue Team🚨" },
    { id: "87m6TH3XrNE", title: "Pororo - Season 1 Full Episodes #1–10" },

    //Curios George 61 VIDS
    {
        "id": "35xfo9MkkBc",
        "title": "Curious George - George Learns to Balance!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "QqlL4X61d_0",
        "title": "Curious George - George's Wagon Ride! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "qfjledmSbk8",
        "title": "Curious George - George's Finger Painting!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "boc8FXmy5NE",
        "title": "Curious George - George's Animal Band! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "E_ZoRfd7Dkw",
        "title": "Curious George - Hundley the Monkey Sitter!  🐵 Curious George 🐵 Kids Cartoon 🐵 Kids Movies"
    },
    {
        "id": "X0WUrobTp20",
        "title": "Curious George - George the Camping Expert!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "_bwcrEFxICA",
        "title": "Curious George - George's Cow Catastrophe! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "6uQmVsWEIzY",
        "title": "Curious George - George's First Snow day! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "uFTzgLoDxwM",
        "title": "Curious George - George Explores the Airport!  🐵 Curious George 🐵 Kids Cartoon 🐵 Kids Movies"
    },
    {
        "id": "vwEalUxz7cI",
        "title": "Curious George - George Counts Crackers!  🐵 Curious George 🐵 Kids Cartoon 🐵 Kids Movies"
    },
    {
        "id": "ro7Xh2s428U",
        "title": "Curious George - George The Hat Maker! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "QcFF3Xuk5Yw",
        "title": "Curious George - George Makes Burgers! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "cuP6D_zwfyA",
        "title": "Curious George - George the Candy Monkey! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "sCOg4JjEdYc",
        "title": "Curious George - George's Lemonade Business!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "odcW4C_bvSQ",
        "title": "Curious George - George Counts the Stars!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "P5R7Zeuxvco",
        "title": "Curious George - George Builds a Dam!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "4SzpeOht4A0",
        "title": "Curious George - George's Space Mission!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "37k6crGz8vo",
        "title": "Curious George - George's Zoo Night!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "7UAJYmliwRw",
        "title": "Curious George - George Visits The Doctor!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "AxFyjCgEK1Q",
        "title": "Curious George - George The Duck!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "j4j8PRM6hBs",
        "title": "Curious George - George Learns About Tadpoles!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "4PCNVP7SO_I",
        "title": "Curious George - George's Dog Filled Apartment!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "FLt741C4xSE",
        "title": "Curious George - George and the Noisy Cricket! 🐵 Curious George 🐵 Kids Cartoon 🐵 Kids Movies"
    },
    {
        "id": "Fj-tMWGS7fw",
        "title": "Curious George - George The Door Monkey! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "H2G-I1wouik",
        "title": "Curious George - George Follows His Nose! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "sGoj5fFt1O4",
        "title": "Curious George - George's Timely Troubles! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "vAota9Can_c",
        "title": "Curious George - George Builds the Greatest Boat! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "DZ1okg4StqQ",
        "title": "Curious George - George’s Donut Overload! 🐵 Full Episodes | Curious George"
    },
    {
        "id": "B8itGUBdwC4",
        "title": "Curious George - George's New Pigeon Friend  🐵 Full Episodes | Curious George"
    },
    {
        "id": "TusSR32quss",
        "title": "Curious George - George the Flying Monkey!  🐵 Full Episodes | Curious George"
    },
    {
        "id": "F3TvUQD3aqs",
        "title": "Curious George - George Explores a Spooky Cave 👻 FULL EPISODE 👻 Curious George 🐵 Kids Cartoon 👻"
    },
    {
        "id": "dsm_45L8pdI",
        "title": "Curious George - Curious George ⛵️ Building a boat ⛵️ FULL EPISODE 🐵 Kids Cartoon 🐵 Kids Movies 🐵 Videos for Kids"
    },
    {
        "id": "gDot-1CJzIo",
        "title": "Curious George - Curious George ⚽️ George's New Soccer Ball ⚽️ FULL EPISODE ⚽️ Kids Cartoon"
    },
    {
        "id": "wfuQLwa-bIs",
        "title": "Curious George - Curious George ⚽️ Playing with George and Hundley ⚽️ FULL EPISODE ⚽️ Kids Cartoon"
    },
    {
        "id": "0D56liBbruM",
        "title": "Curious George - Curious George ⚽️ George Plays Football ⚽️ FULL EPISODE ⚽️ Kids Cartoon"
    },
    {
        "id": "rZYOSf4ApuQ",
        "title": "Curious George - George & Hundley Lost at Night 🎃 Curious George 🐵 FULL EPISODE 🐵 Kids Cartoon 🐵 Videos for Kids"
    },
    {
        "id": "wTXgwZwrsVI",
        "title": "Curious George - Curious George 🐵The All Animal Recycle Band 🐵Full Episode 🐵 Kids Movies | Videos For Kids"
    },
    {
        "id": "htc0uGTS3Ks",
        "title": "Curious George - Curious George 🐵The Elephant Upstairs 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "YraWSpCVRG8",
        "title": "Curious George - Curious George 🐵Housebound! 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "e0dn0N-JTY8",
        "title": "Curious George - Curious George 🐵Camping with Hundley 🐵Full Episode 🐵 HD 🐵 Videos For Kids"
    },
    {
        "id": "yT0us0_q7BI",
        "title": "Curious George - Curious George 🐵Keep Out Cows! 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "hRwmj0oi4DA",
        "title": "Curious George - Curious George 🐵Curious George Takes a Vacation 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "6-nY3XPIHFw",
        "title": "Curious George - Curious George 🐵Surprise Quints 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "7lbBUJQilPU",
        "title": "Curious George - Curious George 🐵The Clean, Perfect Yellow Hat 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "jKSs4BDaEzg",
        "title": "Curious George - Curious George 🐵The Truth About George's Burger🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "S8Q6g6YW1A0",
        "title": "Curious George - Curious George 🐵Candy Counter 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "cdKkinMp5GI",
        "title": "Curious George - Curious George 🐵George Makes A Stand 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "tI-G5DH27AI",
        "title": "Curious George - Curious George 🐵Curious George Sees Stars 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "i845TTKZazM",
        "title": "Curious George - Curious George 🐵Curious George and the Dam Builders 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "5-Fse7LPqL4",
        "title": "Curious George - Curious George 🐵Curious George's Rocket Ride 🐵Full Episode 🐵 HD 🐵 Cartoons For Children"
    },
    {
        "id": "0GKJzTWN6OY",
        "title": "Curious George - Fallen Satellite 🐵 Curious George 🐵Kids Cartoon 🐵 Kids Movies 🐵Videos for Kids"
    },
    {
        "id": "xw7VxtRnsLA",
        "title": "Curious George - George the Sea Monkey 🐵 Curious George 🐵Kids Cartoon 🐵 Kids Movies 🐵Videos for Kids"
    },
    {
        "id": "rwNvFyVnqVY",
        "title": "Curious George - Kind Doggie 🐵 Curious George 🐵Kids Cartoon 🐵 Kids Movies 🐵Videos for Kids"
    },
    {
        "id": "rSYoP6EAKAs",
        "title": "Curious George - The Lucky Cap 🐵 Curious George 🐵Kids Cartoon 🐵 Kids Movies 🐵Videos for Kids"
    },
    {
        "id": "72PhFEycWys",
        "title": "Curious George - Big Cap, Little Cap 🐵 Curious George 🐵Kids Cartoon 🐵 Kids Movies 🐵Videos for Kids"
    },
    {
        "id": "XVpDSxezAAs",
        "title": "Curious George - Curious George 🐵  Bath Time! 🐵 20 Minute Show 🐵  Kids Cartoon 🐵  Kids Movies 🐵 Videos for Kids"
    },
    {
        "id": "CfP4vBoibAA",
        "title": "Curious George - Curious George 🐵  George meets Allie 🐵  Kids Cartoon 🐵  Kids Movies 🐵 Videos for Kids"
    },
    {
        "id": "1whI9E3zGXs",
        "title": "Curious George - Curious George 🐵 Bath Time 🐵 Kids Cartoon 🐵 Kids Movies 🐵 Videos for Kids"
    },
    {
        "id": "tNfw37sx_Z8",
        "title": "Curious George - Chasing Rainbows 🌈 FULL EPISODE 🐵 Curious George 🐵 Kids Cartoon"
    },
    {
        "id": "-bYlsZnH2wM",
        "title": "Curious George - Curious George 🐵 George Learns About Wild Animals | FULL EPISODE 🐵 Kids Cartoon 🐵 Kids Movies"
    },
    {
        "id": "pDNEiBgzIAg",
        "title": "Curious George - Creatures of the Night 🎃 Curious George 🐵 FULL EPISODE 🐵 Kids Cartoon 🐵 Videos for Kids"
    },

    //Peppa Pig 98 VIDS
    {
        "id": "bqTHKjMBZ14",
        "title": "Peppa Pig - The Coolest Cardboard House Ever! 📦 | Peppa Pig Tales Full Episode"
    },
    {
        "id": "zS56GGOc_N0",
        "title": "Peppa Pig - Peppa Becomes a Spy! 🔍 | Peppa Pig Tales Full Episodes"
    },
    {
        "id": "F2HbXmHwqGo",
        "title": "Peppa Pig - Super Peppa Vs Daddy Pig ⚡️ | Peppa Pig Tales Full Episodes"
    },
    {
        "id": "HMDga2C1Uck",
        "title": "Peppa Pig - Peppa's Sore Knee! 🩹 | Peppa Pig Tales Full Episodes"
    },
    {
        "id": "KEo4wQqENKw",
        "title": "Peppa Pig - Try Not to Fall Off! | Peppa Pig Tales Full Episodes"
    },
    {
        "id": "JAE2pWqrPd4",
        "title": "Peppa Pig - The Airport Travelator! ➡️ | Peppa Pig Tales Full Episodes"
    },
    {
        "id": "a2zJLSlKBs4",
        "title": "Peppa Pig - Video Call Chaos 📹 | Peppa Pig Tales Full Episodes"
    },
    {
        "id": "CoE66qDNMt8",
        "title": "Peppa Pig - Peppa Pig Tales 🥕 MASSIVE Christmas Buffet 🎄 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "y4--k3YDOPI",
        "title": "Peppa Pig - Private video"
    },
    {
        "id": "eQhvVBKUnVQ",
        "title": "Peppa Pig - Private video"
    },
    {
        "id": "3CHDEnYf62k",
        "title": "Peppa Pig - Peppa Pig Tales ❄️ Daddy Pig Takes an ICY Plunge  🧊 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "APan8FwMwpE",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🎤 Futuristic KARAOKE Fun 🪩 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "OgW7r3YsS24",
        "title": "Peppa Pig - Peppa Pig Tales 2025 ✨ Peppa's Christmas LIGHT Walk 🎄 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "xGhIEtOZPi4",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🎄 Christmas Eve with Granny & Grandpa Pig! 🎁 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "MjGebXsl94I",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🥣 Baby RESTAURANT Disaster! 🍼 Evie Meets the Rabbit Twins! 🐰BRAND NEW Peppa Pig"
    },
    {
        "id": "onBN9h2q7OI",
        "title": "Peppa Pig - Peppa Pig Tales 👓 GIANT Baby Evie! 😱 Peppa Goes to Funny Museum! 🪞 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "buIF3qbCGWg",
        "title": "Peppa Pig - Peppa Pig Tales 📚 Peppa OPENS a School! ✏️ Teaching Baby Evie 👩‍🏫 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "gyePvIPXoEQ",
        "title": "Peppa Pig - Peppa Pig Tales 🍝 Baby Evie's BIG DINNER🍴 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "ZfTQPAKONi4",
        "title": "Peppa Pig - Peppa Pig Tales 👓 Daddy Pig's EXTREME Makeover! 🧢  NEW LOOK 👀 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "w2ccqSnqIsk",
        "title": "Peppa Pig - Peppa Pig Tales 🩺 Evie's Check Up 👩‍⚕️ Weighing the Baby 🍼 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "FmedxS8RDL4",
        "title": "Peppa Pig - Peppa Pig Tales 🚝 First Class Carriage 🌬️ HIGH TECH Train! 🚂 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "P9OA-DFo_9c",
        "title": "Peppa Pig - Peppa Pig Tales 🔥 Peppa's Becomes a FIREFIGHTER 🏥 Peppa’s Mini Town 🏙️ BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "FJAvCHpnmXM",
        "title": "Peppa Pig - Peppa Pig Tales 🎆 Baby Evie's FIREWORK Night 🎧 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "W5Z-XWaUe4Y",
        "title": "Peppa Pig - Peppa Pig Tales 2025 👑 Peppa & Suzy's WICKED Argument! 🧙 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "Golo9FjQe18",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🍼 Baby Evie's MYSTERY Taste Test! 🥣 Trying NEW Food! 🍧 BRAND NEW Peppa Pig"
    },
    {
        "id": "NJGoP0jtb10",
        "title": "Peppa Pig - Private video"
    },
    {
        "id": "sWGjNrYUo4o",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🎃 Halloween Costume DISASTER!  🧙‍♀️ Evie Nappy Emergency! 🚨 BRAND NEW Peppa Pig"
    },
    {
        "id": "Z8r5rxhViVU",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🍼 Daddy Pig Babysits EVIE! 🪄 Fun PRINCESS Party! 👑 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "-7Vh6oXWhy4",
        "title": "Peppa Pig - Peppa Pig Tales 2025 💦 Peppa EXPLORES Underground Water Factory 🕳️ BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "xkFDe4xCXhE",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🦖 Peppa Finds REAL DINOSAUR Fossil! 🦴 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "JoWR68v-rY4",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🔥 HOT VS COLD Holiday!  ❄️ BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "ZV9xsRyonwM",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🔇 Peppa's SECRET Private Room 🤫  Peppa Builds a FORT! 🏠 BRAND NEW Peppa Pig"
    },
    {
        "id": "sLJNMNdsJGk",
        "title": "Peppa Pig - Peppa Pig Tales 2025 ☕️ Peppa & Evie Eat GIANT Croissant  🥐  BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "nNotjVE5Fes",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🎢 The INFINITE Escalator Ride! 🛗 Never Ending Journey! 🧳 BRAND NEW Episode"
    },
    {
        "id": "487Dvi5OQfs",
        "title": "Peppa Pig - Peppa Pig Tales 2025 👻 SUPER SPOOKY Ghost Train 🚂 HALLOWEEN SPECIAL 🎃 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "gjAWQnd7o_k",
        "title": "Peppa Pig - Peppa Pig Tales 2025 ☕️ Peppa Opens COFFEE SHOP! 👶 Baby Evie's Woodland Walk 🍼  BRAND NEW EPISODE"
    },
    {
        "id": "liZZA0YiMqk",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🧸 Toy REPAIR Hospital 🪡  Fixing Baby Evie's Toy Duck 🐥 BRAND NEW Peppa Pig"
    },
    {
        "id": "dJzUromqY-g",
        "title": "Peppa Pig - Peppa Pig Tales 2025 💰 DELUXE VS DIY 🛠️ Peppa's EPIC Cardboard Houses 🏠 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "ZTLGbTHjcg8",
        "title": "Peppa Pig - Private video"
    },
    {
        "id": "yvmLjZMT44E",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🥦 SUPER FOOD! 🍅 Peppa Gets SUPERPOWERS 🦸‍♀️ BRAND NEW Peppa Pig Episode"
    },
    {
        "id": "nituOrH_pVQ",
        "title": "Peppa Pig - Peppa Pig Tales 2025 📸 Guess Who the Character is? Picture Frame Game 🖼️ BRAND NEW Peppa Pig Episode"
    },
    {
        "id": "pG_imikVkMQ",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🌈 Super RAINBOW Buffet 🍓 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "U2i-t7jVVXA",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🚂 Peppa and Evie's MINI Steam Train Ride 😮 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "uaFH7A7u9xs",
        "title": "Peppa Pig - Peppa Pig Tales 🔴 George Finds MYSTERY Red Button?! 😮 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "e_istUpooBs",
        "title": "Peppa Pig - Peppa Pig Tales 2025 💤 Peppa Helps BABY EVIE Sleep 💘 Bedtime Story 📖 BRAND NEW Peppa Pig Episode"
    },
    {
        "id": "fHq_v2Xta_k",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🛝 Evie's Lazy River Ride 💦 Waterpark FUN! BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "oWayeixv8f0",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🌋 The Floor is LAVA! 💨 Saving Baby Evie ⛑️ BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "zc7zbPaGWAg",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🌳 Super HIGH Tree Top Obstacles ⛳️ BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "hAV__VrFW2Y",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🔊 Evie's Slime Experience 🫧 Sensory Room Fun! ✨ BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "hzVaJ-4hjPw",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🚗 George Builds a MEGA Race Track! 🏁 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "XtePY7340wo",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🛁 Crazy COLOURFUL Bathtub! 🫧 Evie's Bathtime 🐥 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "rClRltHk7EY",
        "title": "Peppa Pig - Private video"
    },
    {
        "id": "M3JwYrzaCNE",
        "title": "Peppa Pig - Peppa Pig Tales 🐞 Peppa Catches a GIANT Bug 🪰 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "x8EejINh8vc",
        "title": "Peppa Pig - Peppa Pig Tales 📸 SUPER Silly Photo Filters 👽 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "LWae9IktP54",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🚽 Toilet Factory Fun! 🧻 Changing Evie's Nappy 🧷 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "IuLy4G_FckM",
        "title": "Peppa Pig - Peppa Pig Tales 2025 🚑 Daddy Pig's EMERGENCY Room Accident 🩺 BRAND NEW Peppa Pig Episodes"
    },
    {
        "id": "LAq2502IDTU",
        "title": "Peppa Pig - Peppa Pig Tales 2025 📞 Baby Monitor WATCHOUT! 💤 Peppa's NEW Bedroom 🛌 BRAND NEW Peppa Pig Episodes"
    },

    //Masha & The Bear 55 VIDS 
    {
        "id": "eg2eiLdxX6Q",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 😵‍💫 Where Did it Goat? 👽🛸 (Episode 124)"
    },
    {
        "id": "NCB98SSUmQQ",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 🍍 A Pineapple of Discord 🍽🐺 (Episode 123)"
    },
    {
        "id": "dThUUF7rQEs",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 🔴 Unfriended? 🐻👎 (Episode 112)"
    },
    {
        "id": "iCMLAGh7ZuY",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 🏡 Welcome Out of Here 🤬🐰 (Episode 127)"
    },
    {
        "id": "HrchZ6KACq8",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 🧖‍♀️ Shower Power 🧼👩‍🎤 (Episode 113)"
    },
    {
        "id": "mWXrM-OKBNQ",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 😊 La-La-Lamb 🐑🥰 (Episode 129)"
    },
    {
        "id": "DF8o7sOzrY0",
        "title": "Masha & The Bear - Masha and the Bear 💜 NEW EPISODE 2025 🪻Lilac Picnic 💜💖 (Episode 126)"
    },
    {
        "id": "xaz2AUvr96w",
        "title": "Masha & The Bear - Masha and the Bear  👉 NEW EPISODE 2025 🦜 It's no Slice of Heaven 🎩👀 (Episode 125)"
    },
    {
        "id": "Pvqs5UhOS64",
        "title": "Masha & The Bear - NEW EPISODE  🐟 Fisherman's Luck 🍀🎣 (Episode 114) 🐟 Masha and the Bear 2024"
    },
    {
        "id": "2-WL2Hr7x2g",
        "title": "Masha & The Bear - NEW EPISODE 🍰 Fluffy Dessert ☁️ (Episode 120) 📦 Masha and the Bear 2024"
    },
    {
        "id": "UoAJ7hXXavI",
        "title": "Masha & The Bear - NEW EPISODE 🐝 Well-beeing 🍬 (Episode 110) 📦 Masha and the Bear 2024"
    },
    {
        "id": "Y7npKZgjpfQ",
        "title": "Masha & The Bear - NEW EPISODE 🦔 Knock-knock-knock 😨🛌 (Episode 111) 📦 Masha and the Bear 2024"
    },
    {
        "id": "BOqoGi1KvpE",
        "title": "Masha & The Bear - NEW EPISODE 🤗 Like Mother, Like daughter 👩‍🍼 (Episode 115) 📦 Masha and the Bear 2024"
    },
    {
        "id": "BhKjLRiuk1Q",
        "title": "Masha & The Bear - NEW EPISODE 📦 Think Outside the Box 💡💭 (Episode 109) 📦 Masha and the Bear 2024"
    },
    {
        "id": "gw2EYWXniZI",
        "title": "Masha & The Bear - NEW EPISODE 🐻‍❄️ The Mystery Guest 🫙🍓 (Episode 101) ❄️☃️ Masha and the Bear 2024"
    },
    {
        "id": "jWOd2B1biz0",
        "title": "Masha & The Bear - NEW EPISODE ✨ Who's Gifted? 🎅🎄 (Episode 117) ❄️☃️ Masha and the Bear 2023"
    },
    {
        "id": "sSSyiAK0lU0",
        "title": "Masha & The Bear - NEW EPISODE 🥔 Soup Pursuit 🥕🍲 (Episode 107) 🍓 Masha and the Bear 2023"
    },
    {
        "id": "LHdnce95vkA",
        "title": "Masha & The Bear - NEW EPISODE ⚽ All You Need is a Goal 🥅 (Episode 106) 🍓 Masha and the Bear 2023"
    },
    {
        "id": "PFAssWKWcGc",
        "title": "Masha & The Bear - NEW EPISODE 🐷 When a Pig Flies 💭 (Episode 105) 🍓 Masha and the Bear 2023"
    },
    {
        "id": "S2OMQBrkQ7M",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 ❄️ It's All on January 🧙🪄 (Episode 149)"
    },
    {
        "id": "rYKDy-AmCjg",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 🧌 Foggy Story 👻😶‍🌫️ (Episode 154)"
    },
    {
        "id": "cG9Yc8hckww",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 🧙 Frogbook 📚🐸 (Episode 151)"
    },
    {
        "id": "U8et7CDAZEc",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 👀 Run Wild 🐐📺 (Episode 146)"
    },
    {
        "id": "rXCsz-3xQKw",
        "title": "Masha & The Bear - Masha and the Bear 🎉 NEW EPISODE 2025 🐺 Don't sell me a dog 🐶🐩 (Episode 142)"
    },
    {
        "id": "9JT9mwARgqE",
        "title": "Masha & The Bear - NEW EPISODE 🦔 My Cutie-Patootie 🥰 (Episode 141) 🩷 Masha and the Bear 2024"
    },
    {
        "id": "3THZ6gD8soI",
        "title": "Masha & The Bear - NEW EPISODE 👸 Princess and the Beast 👹 (Episode 135) 📦 Masha and the Bear 2024"
    },
    {
        "id": "fHnXtisVCGs",
        "title": "Masha & The Bear - NEW EPISODE 🐺 Cardboard savers ✂️📦 (Episode 134) 📦 Masha and the Bear 2024"
    },
    {
        "id": "ZmwcWmnhLIk",
        "title": "Masha & The Bear - NEW EPISODE 🍀 Lucky Charms 🤞🧿 (Episode 133) 🍓 Masha and the Bear 2023"
    },
    {
        "id": "Jy4iAcvirYE",
        "title": "Masha & The Bear - NEW EPISODE 🍋 When Life Gives You Lemons 🧊🥤(Episode 132) 🍓 Masha and the Bear 2023"
    },
    {
        "id": "71S6SXwGUS0",
        "title": "Masha & The Bear - NEW EPISODE ✂️🎨 Arts and Crafts Day 🧵🧶 (Episode 131) 🍓 Masha and the Bear 2023"
    },
    {
        "id": "a0Y7apTrCnw",
        "title": "Masha & The Bear - Masha and the Bear 💥 NEW EPISODE 2024 🇫🇷 Pink of Fashion 👗🧵 (Masha's Songs, Episode 2)"
    },
    {
        "id": "YgkF4mxtvHg",
        "title": "Masha & The Bear - Masha and the Bear 💥 NEW EPISODE 2023 🇮🇳 The Magic Flute 👳‍♀️🪈 (Masha's Songs, Episode 13)"
    },
    {
        "id": "2RTM11StsLg",
        "title": "Masha & The Bear - Masha and the Bear 💥 NEW EPISODE 2023 🇪🇸🪕 Spanish Tunes 🇪🇸💃 (Masha's Songs, Episode 9)"
    },
    {
        "id": "FFfbFHj6kzc",
        "title": "Masha & The Bear - Masha and the Bear 💥 NEW EPISODE 2022 ✨Tales from the East ✨ (Masha's Songs, Episode 11)"
    },
    {
        "id": "UiiH1X7l0Wk",
        "title": "Masha & The Bear - Masha and the Bear 💥 NEW EPISODE 2022 💥 No Work All Carnival 🎆👯 (Masha's Songs, Episode 4)"
    },
    {
        "id": "6xlfjRUSm3o",
        "title": "Masha & The Bear - Masha and the Bear 🐎🤠 Once in the Wild West (Masha's Songs, Episode 10) 🤠🐎"
    },
    {
        "id": "jE1pfq9wxSA",
        "title": "Masha & The Bear - Masha and the Bear 🐲💥 Happy New Year… Again! 💥🐲  (Masha's Songs, Episode 7) New episode! 🎬"
    },
    {
        "id": "xAQ3tqhVa1Y",
        "title": "Masha & The Bear - Masha and the Bear 👑💂 From England with Love 💂👑  (Episode 6) 🎵 Masha's Songs 🎬New cartoon"
    },
    {
        "id": "8-geRMTDn9w",
        "title": "Masha & The Bear - Masha and the Bear 😊 Where all love to sing 😊 Masha's Songs 🇮🇹 About Italy (Episode 1)"
    },
    {
        "id": "6fkyYx_hf_U",
        "title": "Masha & The Bear - Masha and the Bear 😊 NEW SEASON"
    },
    {
        "id": "VF9kmgQuNfA",
        "title": "Masha & The Bear - NEW EPISODE 👋 Coming Back Ain't Easy 🤗 (Episode 53) 🍓 Masha and the Bear 2023"
    },
    {
        "id": "SeAY6KzhAgE",
        "title": "Masha & The Bear - NEW EPISODE 🌍 Around the world in one day 🗺️ (Episode 77) 🌍 Masha and the Bear 2023"
    },
    {
        "id": "7kmd2GVyQys",
        "title": "Masha & The Bear - Masha and the Bear 2023 💥 NEW EPISODE 💥 Quartet Plus (Episode 68) 🎺🎻"
    },
    {
        "id": "I66RPSsUcqk",
        "title": "Masha & The Bear - Masha and the Bear 💥That's your cue! 🎱 (Episode 72)"
    },
    {
        "id": "f1n-kbXdUEY",
        "title": "Masha & The Bear - Masha and the Bear 🌊 Fishy story 🧜‍♂️ (Episode 73) 💥 New episode! 🎬"
    },
    {
        "id": "cd5nQ7K_SH4",
        "title": "Masha & The Bear - Masha and the Bear 🤹‍♀️ Best Medicine 🎪 (Episode 67)"
    },
    {
        "id": "Ep43aNUJqxg",
        "title": "Masha & The Bear - Masha and the Bear 🏒 What a wonderful game ❄️ (Episode 71) 💥 New episode! 🎬"
    },
    {
        "id": "ztXStoz3iIE",
        "title": "Masha & The Bear - Masha and the Bear ❄️ Christmas Carol 🧸 (Episode 61) 💥 New episode! 🎬"
    },
    {
        "id": "zJzslOW-ncg",
        "title": "Masha & The Bear - Masha and the Bear 🦁 God save the queen 👑 (Episode 75) 💥 New episode! 🎬"
    },
    {
        "id": "bQfJACscIuA",
        "title": "Masha & The Bear - Masha and the Bear 👻 A Ghost Story 🍁 (Episode 56) New episode! 🎬"
    },
    {
        "id": "oyLBCND6sY8",
        "title": "Masha & The Bear - Masha and the Bear 💃 At Your Service 🤖 (Episode 60) 🎬"
    },
    {
        "id": "dG26TcPsNLM",
        "title": "Masha & The Bear - Masha and the Bear 🐻 Tee for three ⛳ (Episode 66)"
    },
    {
        "id": "0nVlg2ZC9go",
        "title": "Masha & The Bear - Masha and the Bear 🎭💃 All the world's a stage 💃🎭  (Episode 76)"
    },
    {
        "id": "fzbop3_z670",
        "title": "Masha & The Bear - Masha and the Bear 👽🚀 We Come In Peace! 🚀👽  (Episode 65)"
    },
    {
        "id": "QKEAEPCbjaI",
        "title": "Masha & The Bear - Masha and the Bear – 👶🐷New Kids on the Block! 🐷👶 (Episode 69)"
    },
    {
        "id": "Exsljuc_hvs",
        "title": "Masha & The Bear - Masha and the Bear – 🚀🌕 Twinkle, twinkle, little star 🌕🚀 (Episode 70)"
    },
    {
        "id": "ljco-HIHIWM",
        "title": "Masha & The Bear - Masha and the Bear – 🐑 Rock-a-bye, baby! 🐑 (Episode 62)"
    },
    {
        "id": "b_K6Nytp2k4",
        "title": "Masha & The Bear - Masha and the Bear – The Three Mashketeers ⚔(Episode 64)"
    },
    {
        "id": "PZoW6ORKVuQ",
        "title": "Masha & The Bear - Masha and the Bear – Game Over 🕹️(Episode 59)"
    },
    {
        "id": "AxGlvetWIqc",
        "title": "Masha & The Bear - Masha and The Bear - Monkey Business 🐵(Episode 74)"
    },
    {
        "id": "3kmc88JWdNo",
        "title": "Masha & The Bear - Masha and The Bear - Driving Lessons 🚕 (Episode 55)"
    },
    {
        "id": "lDrKr9AbmuM",
        "title": "Masha & The Bear - Masha and The Bear - Liar, liar, pants on fire! 🌿 (Episode 57)"
    },
    {
        "id": "BlDY4ivFTAo",
        "title": "Masha & The Bear - Masha and The Bear 🐱 Like Cat And Mouse 🐭 (Episode 58)"
    },
    {
        "id": "xRAiyKWp57Q",
        "title": "Masha & The Bear - Masha and The Bear - Surprise! Surprise! (Episode 63) 🐰"
    },
    {
        "id": "dNpWSBku2oo",
        "title": "Masha & The Bear - Masha and The Bear - The very fairy tale ✨ (Episode 54)"
    },

    //Rubble & Crew 271 VIDS
    {
        "id": "6I7J01GUrLM",
        "title": "Rubble & Crew - Rubble & Crew's Best Rescues from Season 1! w/ PAW Patrol! | 90 Minute Compilation | Rubble & Crew"
    },
    {
        "id": "pZsF-X5v66g",
        "title": "Rubble & Crew - Rubble Helps PAW Patrol Marshall Build a Fire Station! 🚒 w/ Motor | FULL EPISODE | Rubble & Crew"
    },
    {
        "id": "0keQYIVrP6o",
        "title": "Rubble & Crew - Rubble's Barkyard & Construction Tower Rescues! w/ Charger | 30 Minute Compilation | Rubble & Crew"
    },
    {
        "id": "0QW61af7SIE",
        "title": "Rubble & Crew - Rubble Rescues a Chicken at the Construction Tower! 🐓 w/ Charger & Auntie Crane | Rubble & Crew"
    },
    {
        "id": "kkgbPUe5d1c",
        "title": "Rubble & Crew - Rubble & Crunchy the Beaver's Best Adventures! w/ Wheeler & Mix | 1 Hour Compilation | Rubble & Crew"
    },
    {
        "id": "aYPpZcW1Xig",
        "title": "Rubble & Crew - Rubble & Crew and PAW Patrol Chase Are On the Case! | FULL EPISODE | Rubble & Crew"
    },
    {
        "id": "bYeI4BQuVPA",
        "title": "Rubble & Crew - Motor's Best Rescues & Adventures! w/ Rubble, Charger & Wheeler | 1 Hour Compilation | Rubble & Crew"
    },
    {
        "id": "s5Qrg0lqoNI",
        "title": "Rubble & Crew - Mix's Most Colorful Renovations With Rubble! 🌈 | 1 Hour Compilation | Rubble & Crew"
    },
    {
        "id": "DK0HlfPlqmk",
        "title": "Rubble & Crew - Rubble Rescues Builder Cove Citizens & Bow Wow Builds! | 120 Minute Compilation | Rubble & Crew"
    },
    {
        "id": "1a7TAg_SNLo",
        "title": "Rubble & Crew - 60 MINUTES of PAW Patrol Rubble's BEST Rescues & Builds from Season 1! 🚜 | Rubble & Crew"
    },
    {
        "id": "4nqm5nbhnE0",
        "title": "Rubble & Crew - Rubble & Chase Go to the Construction Tower to Find Mr. McTurtle! | Rubble & Crew"
    },
    {
        "id": "HyRhuyngJRU",
        "title": "Rubble & Crew - Rubble & Motor Build a Butterfly Garden! 🦋 | Rubble & Crew"
    },
    {
        "id": "LVm_9uPN-3M",
        "title": "Rubble & Crew - Rubble Makes Big Rescues & Builds With Family & Friends! | 90 Minute Compilation | Rubble & Crew"
    },
    {
        "id": "KC7qLO22gco",
        "title": "Rubble & Crew - Rubble & Charger's Lookout Tower Rescues! w/ Chase & Skye | 90 Minute Compilation | Rubble & Crew"
    },
    {
        "id": "OTeh9kMHsS4",
        "title": "Rubble & Crew - Rubble & Marshall Build a Fire Station With the Crew! ft. Motor, Wheeler, & Charger | Rubble & Crew"
    },
    {
        "id": "ydRCIUGZwio",
        "title": "Rubble & Crew - Marshall & Chase Visit Rubble In Builder Cove! | 90 Minute Compilation | Rubble & Crew"
    },
    {
        "id": "6hQ-mhpV7Tc",
        "title": "Rubble & Crew - Wheeler's BEST Construction Missions! w/ Rubble & Charger | 1 Hour Compilation | Rubble & Crew"
    },
    {
        "id": "ZNmQwEDYMas",
        "title": "Rubble & Crew - Charger's Crane Grabber Construction Truck Moments! w/ Rubble | 2 Hour Compilation | Rubble & Crew"
    },
    {
        "id": "SmPbMrafdX8",
        "title": "Rubble & Crew - Motor Gets a Bubble Bath & Messiest Moments! w/ Rubble & Mix | 1 Hour Compilation | Rubble & Crew"
    },
    {
        "id": "ooYBK-WZMa0",
        "title": "Rubble & Crew - Chase Visits Rubble in Builder Cove! w/ Charger & Wheeler | 90 Minute Compilation | Rubble & Crew"
    },
    {
        "id": "rKImindyUCE",
        "title": "Rubble & Crew - Motor's BEST Wrecking Ball Truck Moments! w/ Charger & Mix | 1 Hour Compilation | Rubble & Crew"
    },
    {
        "id": "jbbO8nRm1DQ",
        "title": "Rubble & Crew - Wheeler's BEST Clean Machine Truck Moments! w/ Rubble | 1 Hour Compilation | Rubble & Crew"
    },
    {
        "id": "x1yfKqUXeJA",
        "title": "Rubble & Crew - Charger's BEST Moments From Rubble & Crew! w/ Mix & Wheeler | 1 Hour Compilation | Rubble & Crew"
    },
    {
        "id": "DcrgfL7M__Q",
        "title": "Rubble & Crew - Mix's Best Mixing Truck Adventures! w/ Rubble & Charger | 30 Minute Compilation | Rubble & Crew"
    },
    {
        "id": "3P-sWFp3MQo",
        "title": "Rubble & Crew - Motor Goes BOOM! 💥 w/ Rubble, Mix & Charger | 30 Minute Compilation | Rubble & Crew"
    },
    {
        "id": "sk2Z7TyyxPk",
        "title": "Rubble & Crew - Rubble Builds a Dinosaur Museum! w/ Mix & Charger | Rubble & Crew"
    },
    {
        "id": "mhJSLri9aAM",
        "title": "Rubble & Crew - Rubble's Pup Family Fun In Builder Cove! w/ Motor & Mix | 30 Minute Compilation | Rubble & Crew"
    },
    {
        "id": "5iRJE5QxaLQ",
        "title": "Rubble & Crew - Rubble's BEST Construction Builds! 🚧 w/ Motor & Charger | 30 Minute Compilation| Rubble & Crew"
    },
    {
        "id": "kUmxQORgMhs",
        "title": "Rubble & Crew - FULL EPISODES: Rubble Builds a Car Wash & Celebrates Grandpa's Day w/ Charger & Mix | Rubble & Crew"
    },
    {
        "id": "6UNtQ7UkiQ8",
        "title": "Rubble & Crew - Rubble Makes Bath Time Fun for Motor! w/ Charger, Wheeler & Mix | Rubble & Crew"
    },
    {
        "id": "rFHQE4OR2ZA",
        "title": "Rubble & Crew - Rubble Builds a Super Bathtub For Motor! w/ Charger, Mix, & Wheeler | Rubble & Crew"
    },
    {
        "id": "SVkgydrX2Gc",
        "title": "Rubble & Crew - Rubble Helps Paint a Colorful Bridge to Builder Cove! w/ Mix, Charger & Motor | Rubble & Crew"
    },
    {
        "id": "0cu5HbUkydo",
        "title": "Rubble & Crew - Rubble & Crew's BEST Rescues from Seasons 1 & 2! w/ Rocky & Charger | 2 Hours | Rubble & Crew"
    },
    {
        "id": "HXUkniVbMKg",
        "title": "Rubble & Crew - Rubble & PAW Patrol Rescues + Builds! w/ Chase, Skye & Rocky | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "_roet5ilOQY",
        "title": "Rubble & Crew - Rubble's Springtime Rescues & Construction! w/ Motor & Charger | 30 Minutes | Rubble & Crew"
    },
    {
        "id": "70LAsHcTMlo",
        "title": "Rubble & Crew - Rubble's PAW Patrol Thanksgiving Rescues! | 1 Hour | Rubble & Crew"
    },
    {
        "id": "vRZE9SZgfEU",
        "title": "Rubble & Crew - Wheeler welcomes everyone to the feast! #shorts"
    },
    {
        "id": "9zqzaE6sXiI",
        "title": "Rubble & Crew - PAW Patrol Rubble & Tracker Rescue Dinosaurs & Animals! w/ Rex & Skye | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "1SytRYuTUuI",
        "title": "Rubble & Crew - Mix's Creates Art & Makes Rescues! w/ Rubble, Charger & Motor | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "ewTvUDLd924",
        "title": "Rubble & Crew - Rubble's Wreck & Roll Rescues! w/ PAW Patrol Mighty Pups! | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "L2BTI8kkJGQ",
        "title": "Rubble & Crew - Rubble's Construction Truck Rescues & Action in Builder Cove! w/ Charger | 2 Hours | Rubble & Crew"
    },
    {
        "id": "aj5gXe_y-HU",
        "title": "Rubble & Crew - PAW Patrol Rubble's Rescues in Adventure Bay! w/ Rocky & Zuma | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "Gr04dYBMaCE",
        "title": "Rubble & Crew - Rubble's Coolest PAW Patrol Vehicles & Rescues! w/ Chase & Marshall | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "6cRPkEkYPPI",
        "title": "Rubble & Crew - Rubble & Crew's BEST Rescues & Builds! w/  PAW Patrol | 30 Minutes | Rubble & Crew"
    },
    {
        "id": "F6YuowWkC58",
        "title": "Rubble & Crew - Mix & Motor Team Up With PAW Patrol Skye & Marshall! | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "daVSvADP9io",
        "title": "Rubble & Crew - Rubble's Bubble Trouble & Stinky Rescues! w/ PAW Patrol Zuma & Skye | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "5OjZYyDWGYM",
        "title": "Rubble & Crew - PAW Patrol Rubble's Back to School Rescues! | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "OaHplaBn-Aw",
        "title": "Rubble & Crew - Super Pup Rubble to the Rescue! w/ PAW Patrol Chase, Rocky & Marshall | 1 Hour | Rubble & Crew"
    },
    {
        "id": "_av-sgO215M",
        "title": "Rubble & Crew - Grandpa repairs his food truck! #shorts"
    },
    {
        "id": "6AqumIBer2g",
        "title": "Rubble & Crew - Super Hero Rubble's BIG Rescues! w/ PAW Patrol Chase & Marshall | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "2bXz9cmyndk",
        "title": "Rubble & Crew - Rubble's Stinky Rescues In Adventure Bay! w/ Zuma & Chase | 1 Hour | Rubble & Crew"
    },
    {
        "id": "Gh5rGUdfqSA",
        "title": "Rubble & Crew - Rubble Rescues the PAW Patrol & Saves Adventure Bay! w/ Zuma & Chase | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "uQm-d51o2XI",
        "title": "Rubble & Crew - happy birthday Rubble! 🎂 #shorts"
    },
    {
        "id": "TT2q9OpLSVY",
        "title": "Rubble & Crew - Rubble & Zuma's Water Rescues! w/ PAW Patrol Marshall, Rocky & Chase | 1 Hour | Rubble & Crew"
    },
    {
        "id": "BlYf5ZbJZl0",
        "title": "Rubble & Crew - PAW Patrol Rubble Reports to the Lookout Tower! w/ Roxi & Marshall | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "A2sL4_fJt6M",
        "title": "Rubble & Crew - Rubble & PAW Patrol Save the Day & Make Rescues! w/ Marshall, Rocky & Chase | 1 Hour | Rubble & Crew"
    },
    {
        "id": "JTsexSxcGZQ",
        "title": "Rubble & Crew - PAW Patrol Rubble & Rex Rescue Dinosaurs & Animals! w/ Tracker & Chase | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "qjWLxLbepSE",
        "title": "Rubble & Crew - Rubble's BEST PAW Patrol Teamwork Rescues! w/ Marshall, Chase & Ryder | 1 Hour | Rubble & Crew"
    },
    {
        "id": "y5_vzMbwVkE",
        "title": "Rubble & Crew - Rubble & PAW Patrol Rocky + Zuma's Ultimate Rescues! | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "MDE0eHLjtgk",
        "title": "Rubble & Crew - Rubble Loads Up & Heads Out To Rescue Builder Cove! w/ Wheeler & Mix | Rubble & Crew"
    },
    {
        "id": "HXUkniVbMKg",
        "title": "Rubble & Crew - Rubble & PAW Patrol Rescues + Builds! w/ Chase, Skye & Rocky | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "7afBONRW4Vc",
        "title": "Rubble & Crew - PAW Patrol Rubble's BEST Adventure Bay Rescues! w/ Ryder & Chase | 90 Minutes  | Rubble & Crew"
    },
    {
        "id": "DN7mCzSx5UM",
        "title": "Rubble & Crew - PAW Patrol Rubble Is On the Double! w/ Chase & Ryder | 1 Hour | Rubble & Crew"
    },
    {
        "id": "l4n2vxaF77Y",
        "title": "Rubble & Crew - Rubble gets unexpected arrivals from outer space! #shorts"
    },
    {
        "id": "WD_zCjPm648",
        "title": "Rubble & Crew - PAW Patrol Rubble's Daring Space & Air Rescues! w/ Rocky & Skye | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "-8AxY1iDqkU",
        "title": "Rubble & Crew - PAW Patrol Rubble to the Lookout Tower! w/ Marshall, Chase, Rocky | 1 Hour | Rubble & Crew"
    },
    {
        "id": "Rfs3LBcdp3I",
        "title": "Rubble & Crew - Super Rubble's Top PAW Patrol Hero Rescues! w/ Rocky & Skye | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "4WO7xl3YA1I",
        "title": "Rubble & Crew - PAW Patrol Rubble & Mermaid Pearl Stop Moby! w/ Zuma, Rocky & Everest | 1 Hour | Rubble & Crew"
    },
    {
        "id": "ppZumb1IonE",
        "title": "Rubble & Crew - Rubble & PAW Patrol skydive! #shorts"
    },
    {
        "id": "Dblcd8AIMgk",
        "title": "Rubble & Crew - PAW Patrol Rubble's Wildest Animal Rescues! w/ Rocky, Chase & Tracker! | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "2dQBd7Fu8N8",
        "title": "Rubble & Crew - PAW Patrol Rubble's Silliest Dreams! w/ Marshall & Chase | 1 Hour | Rubble & Crew"
    },
    {
        "id": "goeZDMrLMlo",
        "title": "Rubble & Crew - Rubble & PAW Patrol Awesome Air Rescues! w/ Marshall, Chase & Skye | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "5tztqDNsiWU",
        "title": "Rubble & Crew - PAW Patrol Rubble's Puptastic Builds! w/ Chase, Skye & Rocky! | 60 Minutes | Rubble & Crew"
    },
    {
        "id": "vhN_Wobv3vo",
        "title": "Rubble & Crew - Rubble Is On the Ultimate Double! w/ PAW Patrol Marshall & Skye | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "mgc_D2cnlZ8",
        "title": "Rubble & Crew - Rubble & PAW Patrol Rocky Rescue Daring Danny + MORE Snowy Rescues! | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "jEJOrx1bTpU",
        "title": "Rubble & Crew - Rubble & PAW Patrol Arctic Rescues! w/ Chase, Everest & Zuma | 60 Minutes | Rubble & Crew"
    },
    {
        "id": "F-4hvsWdbbg",
        "title": "Rubble & Crew - Rubble & Charger Visit Adventure Bay for Christmas! w/ PAW Patrol | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "JTFtANH-UII",
        "title": "Rubble & Crew - Rubble's BEST PAW Patrol Construction Truck Rescues! w/Chase & Marshall | 60 Minutes | Rubble & Crew"
    },
    {
        "id": "vXFmu4j8nD0",
        "title": "Rubble & Crew - Rubble & PAW Patrol's BEST Holiday Rescues! w/ Everest & Ryder | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "gin7WgYauuc",
        "title": "Rubble & Crew - PAW Patrol Rubble's Snow Day Rescues! w/ Everest & Marshall | 90 Minute Compilation  | Rubble & Crew"
    },
    {
        "id": "VBnB2oEngCE",
        "title": "Rubble & Crew - Baby Rubble Makes a Snow Rescue! w/ PAW Patrol Ryder & Marshall | 90 Minutes | Rubble & Crew"
    },
    {
        "id": "qwrqX0EZnns",
        "title": "Rubble & Crew - Rubble's Monster Truck Stops Boomer & Mayor Humdinger! w/ PAW Patrol Rocky | Rubble & Crew"
    },
    {
        "id": "i7G0bhorYLo",
        "title": "Rubble & Crew - Rubble Makes Holiday Rescues & Celebrates! w/ PAW Patrol Chase & Skye | Compilation | Rubble & Crew"
    },
    {
        "id": "hXkw9CAO340",
        "title": "Rubble & Crew - Rubble & PAW Patrol Monster Truck save! #PAWPatrol"
    },
    {
        "id": "QO9uPcXF_3Y",
        "title": "Rubble & Crew - PAW Patrol Rubble Makes Daring Rescues & Bakes a Cake! | 90 Minute Compilation | Rubble & Crew"
    },

    //Blaze & The Monster Trucks 173 VIDS
    {
        "id": "cieOPyw2-4w",
        "title": "Blaze & The Monster Trucks - Race Car Monster Machines Compete for the Ice Trophy! 🏆 | Blaze and the Monster Machines"
    },
    {
        "id": "Ezf5hiKaJp8",
        "title": "Blaze & The Monster Trucks - Knight Blaze Wins the Golden Sword Trophy! 🗡️ | 45 Minutes | Blaze and the Monster Machines"
    },
    {
        "id": "cC10u3njMKo",
        "title": "Blaze & The Monster Trucks - Blaze Transforms into a Tow Truck to Rescue Crusher! w/ AJ | Blaze and the Monster Machines"
    },
    {
        "id": "9jWfRC5dJXA",
        "title": "Blaze & The Monster Trucks - Blaze FLIES Over Stink Lasers! w/ AJ & Gabby | Blaze and the Monster Machines"
    },
    {
        "id": "iGkVycDW2c4",
        "title": "Blaze & The Monster Trucks - Robot Blaze Sticky GLUE Rescue! #shorts"
    },
    {
        "id": "kuCv4nf0_yI",
        "title": "Blaze & The Monster Trucks - Blaze Uses His Ambulance Ice Pack Launcher! 🚑 w/ Gabby #shorts"
    },
    {
        "id": "HGfryzv1ZtE",
        "title": "Blaze & The Monster Trucks - Sparkle & Blaze’s Best Family Moments! ❤️ 30 Minutes | Blaze and the Monster Machines"
    },
    {
        "id": "t_qqImGZtf0",
        "title": "Blaze & The Monster Trucks - Blaze & Sparkle Transform Into Superheroes! 🦸‍♀️ | Blaze and the Monster Machines"
    },
    {
        "id": "Hqi0fU441E8",
        "title": "Blaze & The Monster Trucks - Super Blaze Escapes Smashing Spatulas! w/ Super Stripes! | Blaze and the Monster Machines"
    },
    {
        "id": "PwTjr-3rdyA",
        "title": "Blaze & The Monster Trucks - Blaze Saves Axle City with the Queen's Crown 👑 w/ Watts & Darington | Blaze and the Monster Machines"
    },
    {
        "id": "iDrYs5E1dJA",
        "title": "Blaze & The Monster Trucks - Super Hero Blaze is Trapped in a BUBBLE! 🫧 | Blaze and the Monster Machines"
    },
    {
        "id": "9Jf9mBNSVcI",
        "title": "Blaze & The Monster Trucks - Blaze Stops the Gas Guzzler with BLAZING Speed! w/ AJ & Gabby | Blaze and the Monster Machines"
    },
    {
        "id": "_4wXabee3Eg",
        "title": "Blaze & The Monster Trucks - Monster Machine Rally #2 w/ Blaze & Stripes! | Blaze and the Monster Machines"
    },
    {
        "id": "bKrZ1D1x3Uo",
        "title": "Blaze & The Monster Trucks - Blaze & AJ Stop Bad Guys to Save the Day! | 30 Minute Compilation | Blaze and the Monster Machines"
    },
    {
        "id": "BJ_4edImtVw",
        "title": "Blaze & The Monster Trucks - Blaze uses POWER TIRES to stop the Robot Baker! #shorts"
    },
    {
        "id": "i7YxNTkaYS4",
        "title": "Blaze & The Monster Trucks - Special Mission Blaze Rescues A Robot Baby! 👶 | Blaze and the Monster Machines"
    },
    {
        "id": "6GtRgtQcJMs",
        "title": "Blaze & The Monster Trucks - Spin the Robot Blaze Wheel #23 w/ AJ & Stripes! 👾 | Blaze and the Monster Machines"
    },
    {
        "id": "r3MVuOkNa38",
        "title": "Blaze & The Monster Trucks - Blaze's Messiest Adventures w/ AJ & Crusher | 30 Minute Compilation | Blaze and the Monster Machines"
    },
    {
        "id": "nzYjz9vepOs",
        "title": "Blaze & The Monster Trucks - Monster Machine Rally #1 w/ Blaze & Crusher! | Blaze and the Monster Machines"
    },
    {
        "id": "MZ97Ld8lD6I",
        "title": "Blaze & The Monster Trucks - Blaze & AJ Feed Desserts to Crocodiles with a 3-D Printer! | Blaze and the Monster Machines"
    },
    {
        "id": "FdscwfSyuH8",
        "title": "Blaze & The Monster Trucks - Astronaut Blaze Travels Through Outer Space to Mars! 🚀 | Blaze and the Monster Machines"
    },
    {
        "id": "Xa9XEBh5Jf8",
        "title": "Blaze & The Monster Trucks - Blaze Rescues Starla w/ Water & Sun Energy! | Blaze and the Monster Machines"
    },
    {
        "id": "oDKs7w_JB3w",
        "title": "Blaze & The Monster Trucks - Ambulance Blaze Saves Darington’s Stunt Show! | Blaze and the Monster Machines"
    },
    {
        "id": "pBbOqe1zSpM",
        "title": "Blaze & The Monster Trucks - Blaze Rescues a Snow Truck Monster Machine From Melting! w/ AJ | Blaze and the Monster Machines"
    },
    {
        "id": "uNxvh_a24yk",
        "title": "Blaze & The Monster Trucks - Superhero Blaze Rescues a Toy Store! 🧸 | Blaze and the Monster Machines"
    },
    {
        "id": "O9qlpi5q9kY",
        "title": "Blaze & The Monster Trucks - Snow Cannon Blaze and AJ Outrun Snow Sharks! 🦈 | Blaze and the Monster Machines"
    },
    {
        "id": "skzV0BrVWZg",
        "title": "Blaze & The Monster Trucks - Mega Bot Rescues Blaze & AJ! | Blaze and the Monster Machines"
    },
    {
        "id": "msHUbrGByeA",
        "title": "Blaze & The Monster Trucks - Knight Blaze Rescues Crusher & Pickle! w/ AJ & Sparkle | Blaze and the Monster Machines"
    },
    {
        "id": "izhL15xZX70",
        "title": "Blaze & The Monster Trucks - Blaze Delivers Pizza to Penguins! 🍕 w/ AJ | Blaze and the Monster Machines"
    },
    {
        "id": "fUx_WAhO6sU",
        "title": "Blaze & The Monster Trucks - Blaze vs. Crusher Ski Race! w/ AJ, Crusher & Pickle | Blaze and the Monster Machines"
    },
    {
        "id": "FPwtcuZ8Nbw",
        "title": "Blaze & The Monster Trucks - Team Blaze Plays Ice Hockey vs. Team Big Horn! w/ AJ ❄️ | Blaze and the Monster Machines"
    },
    {
        "id": "0v0PdGE0WFM",
        "title": "Blaze & The Monster Trucks - Blaze & Crusher Escape the Jingle Bears! 🎄 w/ AJ | Blaze and the Monster Machines"
    },
    {
        "id": "2CQA5EWwH5E",
        "title": "Blaze & The Monster Trucks - Big Rig Blaze Rescues a Dolphin! w/ AJ | Blaze and the Monster Machines"
    },
    {
        "id": "iqvJ-GUT5Oc",
        "title": "Blaze & The Monster Trucks - Crusher Builds Robots #20 | Games For Kids | Blaze and the Monster Machines"
    },
    {
        "id": "-ru6fjBNvrk",
        "title": "Blaze & The Monster Trucks - Blaze Rescue Knight Battles Cannon Blasters! ⚔️ w/ AJ & Sparkle | Blaze and the Monster Machines"
    },
    {
        "id": "VP2WMOmuHAY",
        "title": "Blaze & The Monster Trucks - Mail Truck Blaze Monster Machine! | Science Games for Kids | Blaze and the Monster Machines"
    },
    {
        "id": "yL26-3-8Sjw",
        "title": "Blaze & The Monster Trucks - Halloween Dragon Blaze Pumpkin Smash! 🎃 | Blaze and the Monster Machines"
    },
    {
        "id": "u586SzPpSqE",
        "title": "Blaze & The Monster Trucks - Blaze Pizza Truck Monster Machine! 🍕 | Science Games for Kids | Blaze and the Monster Machines"
    },
    {
        "id": "zQwp0_TUBQ4",
        "title": "Blaze & The Monster Trucks - Blaze Uses Blazing Speed & Teamwork 🏆 w/ Sparkle & AJ | Blaze and the Monster Machines"
    },
    {
        "id": "d7E389o9efo",
        "title": "Blaze & The Monster Trucks - Crusher Builds Robots #18 | Games For Kids | Blaze and the Monster Machines"
    },
    {
        "id": "9NatvWRH55Q",
        "title": "Blaze & The Monster Trucks - Super Blaze Saves Crusher & Pickle! w/ AJ | Blaze and the Monster Machines"
    },
    {
        "id": "eGmS2AR0oVE",
        "title": "Blaze & The Monster Trucks - Blaze's First Day of Racing School! 📚 Back to School | Blaze and the Monster Machines"
    },
    {
        "id": "A4oBBM5D7uk",
        "title": "Blaze & The Monster Trucks - Gabby's Mechanic Missions! w/ Blaze & AJ #4 | Games For Kids | Blaze and the Monster Machines"
    },
    {
        "id": "U7Hl7xDT5T4",
        "title": "Blaze & The Monster Trucks - Blaze & AJ Escape Big Foot Robot! | Blaze and the Monster Machines"
    },
    {
        "id": "d5-RdrRDeXQ",
        "title": "Blaze & The Monster Trucks - Tow Truck Blaze Rescues Stripes! w/ AJ & Gabby | Blaze and the Monster Machines"
    },
    {
        "id": "kf3oE_hszjU",
        "title": "Blaze & The Monster Trucks - Surfer Blaze Rescues Kitty Cats w/ AJ! | Blaze and the Monster Machines"
    },
    {
        "id": "X05E9yhdg48",
        "title": "Blaze & The Monster Trucks - Blaze's Best Rescues & Adventures w/ AJ! | 30 Minute Compilation | Blaze and the Monster Machines"
    },
    {
        "id": "OxFWJlzbZak",
        "title": "Blaze & The Monster Trucks - Blaze Uses Laser Power w/ Mega Bot & AJ! | Blaze and the Monster Machine"
    },
    {
        "id": "H0l_12h9oKQ",
        "title": "Blaze & The Monster Trucks - Blaze Super Recycling Monster Machine Transformation! ♻️ | Blaze and the Monster Machines"
    },
    {
        "id": "qU5MHPwJnrg",
        "title": "Blaze & The Monster Trucks - Blaze's Funny Jokes & April Fool's Day Fun! | 30 Minute Compilation | Blaze and the Monster Machines"
    },

    //Vooks 144 VIDS
    {
        "id": "4SLa3STm5zA",
        "title": "Vooks - Little Craig and the Yellow Bike | Kids Book Read Aloud | Vooks Narrated Storybooks"
    },
    {
        "id": "EHYNHWfoKf0",
        "title": "Vooks - Elisapee and Her Baby Seagull🐦🐥| Animated Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "MkU2dlkZIZU",
        "title": "Vooks - The Manic Panic! | Animated Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "VfveGf_fmwM",
        "title": "Vooks - Where Are You? | Animated Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "53HKXcG7jm8",
        "title": "Vooks - Private video"
    },
    {
        "id": "4o_-LneOSO4",
        "title": "Vooks - Private video"
    },
    {
        "id": "Ovtn2JyCyZE",
        "title": "Vooks - Private video"
    },
    {
        "id": "POnOLQOCn6o",
        "title": "Vooks - Donuts, The Hole Story! | Kids Book Read Aloud | Vooks Storytime"
    },
    {
        "id": "PAaRFbECs14",
        "title": "Vooks - Animated Read Aloud Kids Book: Fossil by Fossil | Vooks Narrated Storybooks"
    },
    {
        "id": "9ay5SwdfjZk",
        "title": "Vooks - Read Aloud Kids Book: Unicorn and Horse! | Vooks Narrated Storybooks"
    },
    {
        "id": "tvqIPwP3Oxk",
        "title": "Vooks - Grammar and Punctuation for Kids: The Mighty SIlent E! | Vooks Narrated Storybooks"
    },
    {
        "id": "gUwP7LvHEic",
        "title": "Vooks - Punctuation Story for Kids: The Day Punctuation Came to Town! | Vooks Storytime"
    },
    {
        "id": "XoMXeo7E8xk",
        "title": "Vooks - Earth Day Story for Kids: The Boy Who Grew A Forest | Vooks Narrated Storybooks"
    },
    {
        "id": "dpMxhLNBKVA",
        "title": "Vooks - Private video"
    },
    {
        "id": "7ojVd_kJdxI",
        "title": "Vooks - Learn About Penguins for Kids | Pierre the Penguin! | Vooks Narrated Storybooks"
    },
    {
        "id": "UYUQzzULHg4",
        "title": "Vooks - Over and Under the Snow | Animated Narrated Winter Story for Kids | Vooks Narrated Storybooks"
    },
    {
        "id": "m_cIlCEb_ok",
        "title": "Vooks - Mae The Mayfly! | Animated Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "V491n_OgD8Y",
        "title": "Vooks - Kids Book Read Aloud: Luis And Tabitha! | Vooks Narrated Storybooks"
    },
    {
        "id": "5GUeFqe2nF0",
        "title": "Vooks - Learn About Doctors for Kids! | Animated Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "AywJnWkjBVM",
        "title": "Vooks - Learn About Construction for Kids! | Animated Kids Books | Vooks Narrated Storybooks"
    },
    {
        "id": "bDUxlLvy3IA",
        "title": "Vooks - Private video"
    },
    {
        "id": "qzfhME-ZgDQ",
        "title": "Vooks - Private video"
    },
    {
        "id": "CEPw4CEGc1o",
        "title": "Vooks - Social Emotional Learning For Kids: Benji, the Bad Day, and Me | Vooks Storytime"
    },
    {
        "id": "2REU8uISCKU",
        "title": "Vooks - Animated Kids Book: Allegro! | Vooks Narrated Storybooks"
    },
    {
        "id": "rw9NstM1Q4E",
        "title": "Vooks - Our Class is a Family Read Aloud | Animated Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "yHZHBH3b8Ng",
        "title": "Vooks - Animated Read Aloud Kids Book: Ronnie and His Grit! | Vooks Narrated Storybooks"
    },
    {
        "id": "3S4Kj4wTKDU",
        "title": "Vooks - Read Aloud Kids Book: Olivia's Tower! | Vooks Narrated Storybooks"
    },
    {
        "id": "ZgQTUYjvt0M",
        "title": "Vooks - Chocolate Mud Cake! | Animated Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "4AE0S2J5g-s",
        "title": "Vooks - Learn Vowels for Kids: A-E-I-O-U | Vooks Animated Read Aloud Storybooks"
    },
    {
        "id": "GVrypXANqfM",
        "title": "Vooks - First Grade Back to School Story: Be Big Beatrice! | Vooks Narrated Storybooks"
    },
    {
        "id": "ptq_tIzC53E",
        "title": "Vooks - We're Opposites! | Kids Book Read Aloud | Vooks Storytime"
    },
    {
        "id": "OTOaOdCrrik",
        "title": "Vooks - Where Does Kitty Go In The Rain? | Animated Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "dlxE-aWzFoc",
        "title": "Vooks - The Wall in the Middle of the Book | Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "BH7SOQT0sOw",
        "title": "Vooks - Animated Read Aloud Kids Book: The Digger and the Flower! | Vooks Narrated Storybooks"
    },
    {
        "id": "HWErEElVzag",
        "title": "Vooks - Private video"
    },
    {
        "id": "aZ-oGyi6MWI",
        "title": "Vooks - Animated Storybook | Learn Shapes for Kids | Storytime For Children | Vooks"
    },
    {
        "id": "AiyEVZQ4ypY",
        "title": "Vooks - POOPENDOUS! | Kids Books Read Aloud | Vooks Narrated Storybooks"
    },
    {
        "id": "pCU_P4ruhdM",
        "title": "Vooks - Private video"
    },
    {
        "id": "WlQT-cF-tXs",
        "title": "Vooks - Private video"
    },
    {
        "id": "3UDqx4OQoMk",
        "title": "Vooks - Animated Read Aloud Kids Book: Lines that Wiggle! | Vooks Narrated Storybooks"
    },
    {
        "id": "5IZJ0C1bmTE",
        "title": "Vooks - Private video"
    },
    {
        "id": "3NpivMcNsOc",
        "title": "Vooks - Earth Day Story for Kids: Be Thankful For Trees | Vooks Narrated Storybooks"
    },
    {
        "id": "K2bO3OiuGBc",
        "title": "Vooks - Animated Read Aloud Kids Book: The Mitten! | Vooks Narrated Storybooks"
    },
    {
        "id": "_3sKp6_gA_w",
        "title": "Vooks - Stay Wild My Child! | Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "QXxGPdWUmeo",
        "title": "Vooks - Private video"
    },
    {
        "id": "3IpdG2MckQg",
        "title": "Vooks - The Nutcracker | Animated Read Aloud Holiday Story for Kids | Vooks Narrated Storybooks"
    },
    {
        "id": "R4ffQhDvsqc",
        "title": "Vooks - Moon's On Fire! | Cowboy Song for Kids | Vooks Narrated Storybooks"
    },
    {
        "id": "sKXEfmV6xro",
        "title": "Vooks - Read Aloud Kids Book: Little Sock! | Vooks Narrated Storybooks"
    },
    {
        "id": "WGcI3Pk-VSE",
        "title": "Vooks - Kids Book Read Aloud: Little Girl Big Dream! | Vooks Narrated Storybooks"
    },
    {
        "id": "F0lixBclhM4",
        "title": "Vooks - Lil Poo! | Animated Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "rw9NstM1Q4E",
        "title": "Vooks - Our Class is a Family Read Aloud | Animated Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "Oiti40G4gmM",
        "title": "Vooks - The Bee Box that Jack Built | Animated Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "yHZHBH3b8Ng",
        "title": "Vooks - Animated Read Aloud Kids Book: Ronnie and His Grit! | Vooks Narrated Storybooks"
    },
    {
        "id": "POnOLQOCn6o",
        "title": "Vooks - Donuts, The Hole Story! | Kids Book Read Aloud | Vooks Storytime"
    },
    {
        "id": "Ovtn2JyCyZE",
        "title": "Vooks - Private video"
    },
    {
        "id": "PAaRFbECs14",
        "title": "Vooks - Animated Read Aloud Kids Book: Fossil by Fossil | Vooks Narrated Storybooks"
    },
    {
        "id": "VfveGf_fmwM",
        "title": "Vooks - Where Are You? | Animated Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "4SLa3STm5zA",
        "title": "Vooks - Little Craig and the Yellow Bike | Kids Book Read Aloud | Vooks Narrated Storybooks"
    },
    {
        "id": "EHYNHWfoKf0",
        "title": "Vooks - Elisapee and Her Baby Seagull🐦🐥| Animated Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "MkU2dlkZIZU",
        "title": "Vooks - The Manic Panic! | Animated Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "53HKXcG7jm8",
        "title": "Vooks - Private video"
    },
    {
        "id": "4o_-LneOSO4",
        "title": "Vooks - Private video"
    },
    {
        "id": "9ay5SwdfjZk",
        "title": "Vooks - Read Aloud Kids Book: Unicorn and Horse! | Vooks Narrated Storybooks"
    },
    {
        "id": "tvqIPwP3Oxk",
        "title": "Vooks - Grammar and Punctuation for Kids: The Mighty SIlent E! | Vooks Narrated Storybooks"
    },
    {
        "id": "gUwP7LvHEic",
        "title": "Vooks - Punctuation Story for Kids: The Day Punctuation Came to Town! | Vooks Storytime"
    },
    {
        "id": "XoMXeo7E8xk",
        "title": "Vooks - Earth Day Story for Kids: The Boy Who Grew A Forest | Vooks Narrated Storybooks"
    },
    {
        "id": "dpMxhLNBKVA",
        "title": "Vooks - Private video"
    },
    {
        "id": "7ojVd_kJdxI",
        "title": "Vooks - Learn About Penguins for Kids | Pierre the Penguin! | Vooks Narrated Storybooks"
    },
    {
        "id": "UYUQzzULHg4",
        "title": "Vooks - Over and Under the Snow | Animated Narrated Winter Story for Kids | Vooks Narrated Storybooks"
    },
    {
        "id": "m_cIlCEb_ok",
        "title": "Vooks - Mae The Mayfly! | Animated Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "V491n_OgD8Y",
        "title": "Vooks - Kids Book Read Aloud: Luis And Tabitha! | Vooks Narrated Storybooks"
    },
    {
        "id": "5GUeFqe2nF0",
        "title": "Vooks - Learn About Doctors for Kids! | Animated Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "AywJnWkjBVM",
        "title": "Vooks - Learn About Construction for Kids! | Animated Kids Books | Vooks Narrated Storybooks"
    },
    {
        "id": "bDUxlLvy3IA",
        "title": "Vooks - Private video"
    },
    {
        "id": "qzfhME-ZgDQ",
        "title": "Vooks - Private video"
    },
    {
        "id": "CEPw4CEGc1o",
        "title": "Vooks - Social Emotional Learning For Kids: Benji, the Bad Day, and Me | Vooks Storytime"
    },
    {
        "id": "2REU8uISCKU",
        "title": "Vooks - Animated Kids Book: Allegro! | Vooks Narrated Storybooks"
    },
    {
        "id": "ptq_tIzC53E",
        "title": "Vooks - We're Opposites! | Kids Book Read Aloud | Vooks Storytime"
    },
    {
        "id": "OTOaOdCrrik",
        "title": "Vooks - Where Does Kitty Go In The Rain? | Animated Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "dlxE-aWzFoc",
        "title": "Vooks - The Wall in the Middle of the Book | Read Aloud Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "BH7SOQT0sOw",
        "title": "Vooks - Animated Read Aloud Kids Book: The Digger and the Flower! | Vooks Narrated Storybooks"
    },
    {
        "id": "HWErEElVzag",
        "title": "Vooks - Private video"
    },
    {
        "id": "aZ-oGyi6MWI",
        "title": "Vooks - Animated Storybook | Learn Shapes for Kids | Storytime For Children | Vooks"
    },
    {
        "id": "AiyEVZQ4ypY",
        "title": "Vooks - POOPENDOUS! | Kids Books Read Aloud | Vooks Narrated Storybooks"
    },
    {
        "id": "pCU_P4ruhdM",
        "title": "Vooks - Private video"
    },
    {
        "id": "WlQT-cF-tXs",
        "title": "Vooks - Private video"
    },
    {
        "id": "3UDqx4OQoMk",
        "title": "Vooks - Animated Read Aloud Kids Book: Lines that Wiggle! | Vooks Narrated Storybooks"
    },
    {
        "id": "5IZJ0C1bmTE",
        "title": "Vooks - Private video"
    },
    {
        "id": "3NpivMcNsOc",
        "title": "Vooks - Earth Day Story for Kids: Be Thankful For Trees | Vooks Narrated Storybooks"
    },
    {
        "id": "K2bO3OiuGBc",
        "title": "Vooks - Animated Read Aloud Kids Book: The Mitten! | Vooks Narrated Storybooks"
    },
    {
        "id": "QXxGPdWUmeo",
        "title": "Vooks - Private video"
    },
    {
        "id": "3IpdG2MckQg",
        "title": "Vooks - The Nutcracker | Animated Read Aloud Holiday Story for Kids | Vooks Narrated Storybooks"
    },
    {
        "id": "R4ffQhDvsqc",
        "title": "Vooks - Moon's On Fire! | Cowboy Song for Kids | Vooks Narrated Storybooks"
    },
    {
        "id": "sKXEfmV6xro",
        "title": "Vooks - Read Aloud Kids Book: Little Sock! | Vooks Narrated Storybooks"
    },
    {
        "id": "WGcI3Pk-VSE",
        "title": "Vooks - Kids Book Read Aloud: Little Girl Big Dream! | Vooks Narrated Storybooks"
    },
    {
        "id": "F0lixBclhM4",
        "title": "Vooks - Lil Poo! | Animated Kids Book | Vooks Narrated Storybooks"
    },
    {
        "id": "7GpQsGCOHkE",
        "title": "Vooks - Animated Read Aloud Kids Book: Leaves! | Vooks Narrated Storybooks"
    },
    {
        "id": "r4EYqfBPNN8",
        "title": "Vooks - Bedtime Story for Kids: It's Time to Say Goodnight | Vooks Narrated Storybooks"
    },
    {
        "id": "hkz51Td9k5A",
        "title": "Vooks - Read Aloud Kids Book: It's A Firefly Night! | Vooks Narrated Storybooks"
    },
    {
        "id": "ydQx5L0tDeE",
        "title": "Vooks - Private video"
    },

    //Teacher Aya 49 VIDS
    {
        "id": "DJa3MPhtD8U",
        "title": "Teacher Aya - Different animals English and Tagalog Part 2 | Videos of different animals"
    },
    {
        "id": "VR5AX81t8Co",
        "title": "Teacher Aya - Vegetables || English and Tagalog || Learn the different name of vegetables"
    },
    {
        "id": "xZ--ktj5QWI",
        "title": "Teacher Aya - Name of Fruits || English and Tagalog || Learn the different name of fruits"
    },
    {
        "id": "qK8PfYp_3cg",
        "title": "Teacher Aya - English/Tagalog_Iba't-ibang uri ng hayop at ang huni o tunog ng mga ito. (English/Tagalog)"
    },
    {
        "id": "sGAzk-LEVYo",
        "title": "Teacher Aya - Learn Common English-Tagalog Sentences | Teacher Aya Online Tutor | Lesson for Kids"
    },
    {
        "id": "Cz6yY33EBYM",
        "title": "Teacher Aya - Spelling Lesson  English-Tagalog || Body Parts"
    },
    {
        "id": "AvlueZ7p_aA",
        "title": "Teacher Aya - Learn Basic Words | English Tagalog | For preschoolers"
    },
    {
        "id": "gRHup0n3N2I",
        "title": "Teacher Aya - UNANG HAKBANG SA PAGBASA NG TAGALOG (ABAKADA) KINDER, GRADE1 AT GRADE 2"
    },
    {
        "id": "KMeyXf5ISlQ",
        "title": "Teacher Aya - PAGBASA NG TAGALOG FOR KINDER, GRADE1 AT 2. PAGPAPANTIG AT PAGBUO NG MGA SALITA."
    },
    {
        "id": "nePNGPeSh8Q",
        "title": "Teacher Aya - MATUTONG BUMASA- PAGPAPANTIG AT PAGBUO NG MGA SALITA GAMIT ANG MGA PANTIG NA BINASA (PART 4)"
    },
    {
        "id": "BZ8w-KB3zEI",
        "title": "Teacher Aya - PAGSASANAY SA PAGBASA (PAGPAPANTIG AT PAGBUO NG MGA SALITA GAMIT ANG MGA PANTIG NA BINASA) PART 7"
    },
    {
        "id": "I4v1S8E6kfY",
        "title": "Teacher Aya - MAGSANAY BUMASA NG PATINIG A E I O U. VIDEO LESSON WITH QUIZ, FOR KINDER AND GRADE 1"
    },
    {
        "id": "LZ0XqcBeEDM",
        "title": "Teacher Aya - Private video"
    },
    {
        "id": "BRFEZJWiHEU",
        "title": "Teacher Aya - VIDEO LESSON WITH QUIZ (Magsanay at matutong bumasa) (ka ke ki ko ku) Para sa Kinder, Grade 1 & 2"
    },
    {
        "id": "CgIGAffsWJU",
        "title": "Teacher Aya - Magsanay at matutong bumasa DA DE DI DO DU (Video lesson with quiz) For Kinder, Grade1 at Grade2"
    },
    {
        "id": "nj7n1HhgcqU",
        "title": "Teacher Aya - Matutong bumasa/ Pagbasa ng salitang may dalawang pantig/ Magsanay at matutong bumasa"
    },
    {
        "id": "mVG71zCuKHY",
        "title": "Teacher Aya - Pagbasa ng mga salitang may dalawang pantig (Part2) Magsanay at matutong bumasa."
    },
    {
        "id": "3h8IZguHSQI",
        "title": "Teacher Aya - Pagsasanay sa pagbasa ng mga salitang may tatlong pantig | Reading video lesson for KInder & Grade1"
    },
    {
        "id": "SWhdR8eFLpQ",
        "title": "Teacher Aya - Pagsasanay sa pagbasa ng mga pangungusap | Filipino Kinder | Grade 1 & 2 | Practice Reading"
    },
    {
        "id": "YIPkzChgMZU",
        "title": "Teacher Aya - Ga Ge Ge Gi Gu  |  Pagsasanay sa pagbasa ng pantig  | Abakada  |  Filipino Kinder  | Grade1"
    },
    {
        "id": "kFLZ6b8TNaY",
        "title": "Teacher Aya - Pagsasanay sa Pagbasa || Mga salitang nagtatapos sa \"ay\" \"aw\" at \"oy\" | Diptonggo || Filipino Grade1"
    },
    {
        "id": "kFLZ6b8TNaY",
        "title": "Teacher Aya - Pagsasanay sa Pagbasa || Mga salitang nagtatapos sa \"ay\" \"aw\" at \"oy\" | Diptonggo || Filipino Grade1"
    },
    {
        "id": "ucYPb4hg1Fs",
        "title": "Teacher Aya - Kambal katinig || Pagsasanay sa pagbasa || Pagpapantig || Pagbasa ng Tagalog || Grade 1 || Grade 2"
    },
    {
        "id": "nzbxq1M1Va8",
        "title": "Teacher Aya - Pagsasanay sa pagbasa || HA HE HI HO HU || Pagpapantig || Unang Hakbang sa Pagbasa  || Abakada"
    },
    {
        "id": "xx614oy0mY4",
        "title": "Teacher Aya - LA LE LI LO LU || Pagsasanay sa pagbasa || Pagpapantig || Magsanay ata matutong bumasa"
    },
    {
        "id": "ycmgQenwGU0",
        "title": "Teacher Aya - Part2_ Pagsasanay sa pagbasa ng mga pangungusap | Magsanay at matutong bumasa | Filipino Grade 1 & 2"
    },
    {
        "id": "905eU-W_EJ8",
        "title": "Teacher Aya - MA ME MI MO MU Magsanay at matutong bumasa || Pagsasanay sa pagbasa ||"
    },
    {
        "id": "QFYpjN4fYDg",
        "title": "Teacher Aya - Abakada || Magsanay at matutong bumasa ng abakada || Mga salitang nagsisimula sa patinig at katinig"
    },
    {
        "id": "EnjcsvsNN80",
        "title": "Teacher Aya - Magsanay at matutong bumasa ng Aa, Ee, Ii, Oo, Uu | Pagsasanay sa pagbasa |Mag-aral bumasa | Patinig"
    },
    {
        "id": "PmDYDuIHyvU",
        "title": "Teacher Aya - Mag-aral at matutong bumasa ng pangungusap || Pagsasanay sa pagbasa ng Tagalog"
    },
    {
        "id": "Q5dSlEw2gKk",
        "title": "Teacher Aya - Abakada Tunog /a/ || Pagsasanay sa Pagbasa || Magsanay at matutong bumasa"
    },
    {
        "id": "blIUJrotTGI",
        "title": "Teacher Aya - Patinig || Pagsasanay sa pagbasa ng patinig || a e i o u"
    },
    {
        "id": "w_lVTX1kz0s",
        "title": "Teacher Aya - Reading Lesson - FILIPINO | Pagsasanay sa  Pagbasa ng Pangungusap |Teacher Aya | Grade 1, 2, 3, 4"
    },
    {
        "id": "C6xMVz0XO0Q",
        "title": "Teacher Aya - FILIPINO READING LESSON | PARIRALA | Magsanay at Matutong bumasa  | Teacher Aya Online Tutor"
    },
    {
        "id": "KjHvMnX_hSw",
        "title": "Teacher Aya - FILIPINO READING LESSON | Magsanay at Matutong bumasa | Pagpapantig | Teacher Aya Online Tutor"
    },
    {
        "id": "fO4Dx2awDXQ",
        "title": "Teacher Aya - Filipino Reading Lesson | Pagsasanay sa  Pagbasa ng Pangungusap |Teacher Aya | Grade 1, 2, 3, 4"
    },
    {
        "id": "Oq42TEwy4mM",
        "title": "Teacher Aya - Filipino Reading Lesson | Pagsasanay sa Pagbasa | Compilation | Teacher Aya | Pantig | Pangungusap"
    },
    {
        "id": "OnNGzrIn7Mw",
        "title": "Teacher Aya - Matutong Bumasa | Tagalog Reading Lesson | Teacher Aya |  Pagpapantig | Tatlong pantig"
    },
    {
        "id": "DLcYlnpV0dw",
        "title": "Teacher Aya - Filipino Reading Lesson | Matutong Bumasa | Salitang may Dalawang Pantig | Teacher Aya Online Tutor"
    },
    {
        "id": "MbtBd7ZDj3o",
        "title": "Teacher Aya - Magsanay at Matutong Bumasa | Abakada | Pagpapantig |Reading Lesson"
    },
    {
        "id": "dfbIg-Oq6Bs",
        "title": "Teacher Aya - Magsanay at Matutong Bumasa | Tagalog Reading Lesson | Teacher Aya |  Pagpapantig | Tatlong pantig"
    },
    {
        "id": "IU1W4CV5_Go",
        "title": "Teacher Aya - Reading Comprehension- Tagalog | Pagsasanay sa Pagbasa ng Maikling Kwento | Teacher Aya Online Tutor"
    },
    {
        "id": "ysInaEWhmeg",
        "title": "Teacher Aya - Filipino Reading Lesson Part 2  | Matutong bumasa | Pagbasa ng salitang may dalawang pantig"
    },
    {
        "id": "1biMUoHwUhA",
        "title": "Teacher Aya - Filipino Reading Lesson | Pagbasa ng salitang may dalawang pantig | Magsanay at matutong bumasa"
    },
    {
        "id": "rjUdmFVjMhc",
        "title": "Teacher Aya - Matutong bumasa ng abakada || Unang hakbang sa pagbasa || Pagsasanay sa pagbasa"
    },
    {
        "id": "MsClaGzrolo",
        "title": "Teacher Aya - Magsanay at matutong bumasa | Pagpapantig | A, E, I, O, U | Ba, Be, Bi, Bo, Bu | Ka, Ke, Ki, Ko, Ku"
    },
    {
        "id": "6d9HpR8VE0k",
        "title": "Teacher Aya - Magsanay at Matutong Bumasa | Pagpapantig at Pangungusap"
    },
    {
        "id": "PdilHsG3z_c",
        "title": "Teacher Aya - FILIPINO READING LESSON | PANGUNGUSAP| Magsanay at Matutong bumasa  | Teacher Aya Online Tutor"
    },
    {
        "id": "rPdDniEHQgc",
        "title": "Teacher Aya - FILIPINO READING LESSON FOR KIDS | MAGSANAY AT MATUTONG BUMASA | MGA SALITA AT PANGUNGUSAP"
    },

    //Teaching Mama 60 VIDS
    {
        "id": "lDAhNl1S62Y",
        "title": "Teaching Mama - Learn Basic Words | Part 1 | English-Tagalog | For Preschool and Kinder | Teaching Mama"
    },
    {
        "id": "6tlZCWAcLfI",
        "title": "Teaching Mama - Learn Basic Words | Part 2 | English-Tagalog | For Preschool and Kinder | Teaching Mama"
    },
    {
        "id": "mMdeDSBS9wY",
        "title": "Teaching Mama - Learn Basic Words | Part 3 | English-Tagalog | For Preschool and Kinder | Teaching Mama"
    },
    {
        "id": "OSXkNY5o1YE",
        "title": "Teaching Mama - Learn Basic Words | Part 4 | English-Tagalog | For Preschool and Kinder | Teaching Mama"
    },
    {
        "id": "PBWgQXGDr-I",
        "title": "Teaching Mama - BASIC WORDS | HOUSEHOLD ITEMS | ENGLISH AND TAGALOG | TEACHING MAMA"
    },
    {
        "id": "43MlKwSsAyg",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | UNANG HAKBANG SA PAGBASA | TEACHING MAMA"
    },
    {
        "id": "Ff9FvfCQHkg",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | 1 ORAS NA PAGBASA | TEACHING MAMA"
    },
    {
        "id": "pMrWZBwQ4Jw",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | UNANG HAKBANG SA PAGBASA | TEACHING MAMA"
    },
    {
        "id": "miDCkvOl4ok",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | UNANG HAKBANG SA PAGBASA | TEACHING MAMA"
    },
    {
        "id": "6zf1MDG5geY",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FILIPINO READING FOR KIDS | TEACHING MAMA"
    },
    {
        "id": "CdaUkptl7w0",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | LEARNING VIDEOS FOR KINDER| TEACHING MAMA"
    },
    {
        "id": "DCIWTxiOAz8",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FILIPINO READING FOR KINDERGARTEN | TEACHING MAMA"
    },
    {
        "id": "JvqJs7oU8EA",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FILIPINO READING FOR KINDERGARTEN | TEACHING MAMA"
    },
    {
        "id": "LzXItWjpWGE",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FILIPINO READING FOR KINDERGARTEN | TEACHING MAMA"
    },
    {
        "id": "_E06I7ZWje0",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FILIPINO READING FOR KINDERGARTEN | TEACHING MAMA"
    },
    {
        "id": "cN-jd9rSZrQ",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FILIPINO READING FOR KINDERGARTEN | TEACHING MAMA"
    },
    {
        "id": "euL8wFk164g",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FILIPINO READING FOR KINDERGARTEN | TEACHING MAMA"
    },
    {
        "id": "ey_y6u5vSe4",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FILIPINO READING FOR KINDERGARTEN | TEACHING MAMA"
    },
    {
        "id": "-fjG9ZvP65A",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | TAGALOG READING | TEACHING MAMA"
    },
    {
        "id": "2tPVpHavHQE",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FOR KINDER & GRADE 1 | TEACHING MAMA"
    },
    {
        "id": "4Cds-1WdgzE",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | UNANG HAKBANG SA PAGBASA | TEACHING MAMA"
    },
    {
        "id": "5UeJFfkObZ0",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FOR KINDER & GRADE 1 | TEACHING MAMA"
    },
    {
        "id": "CNRvYA-UzXk",
        "title": "Teaching Mama - MAGBASA TAYO | PAGSASANAY SA PAGBASA NG TAGALOG | TEACHING MAMA"
    },
    {
        "id": "FDIN7gW33kE",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG PANGUNGUSAP | TAGALOG READING | TEACHING MAMA"
    },
    {
        "id": "k5irrCARFwU",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | TEACHING MAMA"
    },
    {
        "id": "rCMfmkD7RzY",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | KINDER & GRADE 1 | TEACHING MAMA"
    },
    {
        "id": "-vZi4mPWLX8",
        "title": "Teaching Mama - Magbasa Tayo! | Tagalog Reading | Pagsasanay sa Pagbasa | Teaching Mama"
    },
    {
        "id": "5mHCM9Jk1PE",
        "title": "Teaching Mama - MAGBASA TAYO! | TAGALOG READING | PAGSASANAY SA PAGBASA | Teaching Mama"
    },
    {
        "id": "6c23O7b38VI",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG |  TEACHING MAMA"
    },
    {
        "id": "7yPJqUji8BI",
        "title": "Teaching Mama - MAGBASA TAYO! | Pagsasanay sa Pagbasa ng Tagalog | Teaching Mama"
    },
    {
        "id": "AnemIGXztr0",
        "title": "Teaching Mama - MAGBASA TAYO! | Pagbasa ng Pangungusap | Kinder and Grade 1 | Teaching Mama"
    },
    {
        "id": "MDeOTNTPK_8",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FOR GRADE 1 & 2 | TEACHING MAMA"
    },
    {
        "id": "Rbou-CoMJ8o",
        "title": "Teaching Mama - MAGBASA TAYO! | Tagalog Reading Comprehension | Kinder and Grade 1 | Teaching Mama"
    },
    {
        "id": "ZVl6oiO2o9Y",
        "title": "Teaching Mama - Magbasa Tayo! | Tagalog Reading | Pagsasanay sa Pagbasa | Teaching Mama"
    },
    {
        "id": "glAJ61jI4Qo",
        "title": "Teaching Mama - Magbasa Tayo! | Tagalog Reading | Pagsasanay sa Pagbasa | Teaching Mama"
    },
    {
        "id": "mubM6cvchiw",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | Teaching Mama"
    },
    {
        "id": "sAljKqb4fao",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | TEACHING MAMA"
    },
    {
        "id": "-fjG9ZvP65A",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | TAGALOG READING | TEACHING MAMA"
    },
    {
        "id": "FDIN7gW33kE",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG PANGUNGUSAP | TAGALOG READING | TEACHING MAMA"
    },
    {
        "id": "5mHCM9Jk1PE",
        "title": "Teaching Mama - MAGBASA TAYO! | TAGALOG READING | PAGSASANAY SA PAGBASA | Teaching Mama"
    },
    {
        "id": "6c23O7b38VI",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG |  TEACHING MAMA"
    },
    {
        "id": "MDeOTNTPK_8",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | FOR GRADE 1 & 2 | TEACHING MAMA"
    },
    {
        "id": "mubM6cvchiw",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | Teaching Mama"
    },
    {
        "id": "rCMfmkD7RzY",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | KINDER & GRADE 1 | TEACHING MAMA"
    },
    {
        "id": "rCMfmkD7RzY",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG | KINDER & GRADE 1 | TEACHING MAMA"
    },
    {
        "id": "6c23O7b38VI",
        "title": "Teaching Mama - MAGBASA TAYO! | PAGSASANAY SA PAGBASA NG TAGALOG |  TEACHING MAMA"
    },
    {
        "id": "AnemIGXztr0",
        "title": "Teaching Mama - MAGBASA TAYO! | Pagbasa ng Pangungusap | Kinder and Grade 1 | Teaching Mama"
    },
    {
        "id": "glAJ61jI4Qo",
        "title": "Teaching Mama - Magbasa Tayo! | Tagalog Reading | Pagsasanay sa Pagbasa | Teaching Mama"
    },
    {
        "id": "-vZi4mPWLX8",
        "title": "Teaching Mama - Magbasa Tayo! | Tagalog Reading | Pagsasanay sa Pagbasa | Teaching Mama"
    },
    {
        "id": "DgY8yq-mFdw",
        "title": "Teaching Mama - Pagsasanay sa Pagbasa ng Pangungusap | Kinder and Grade 1 | Teaching Mama"
    },
    {
        "id": "ZBjZFVLoOes",
        "title": "Teaching Mama - Magbasa Tayo! | Tagalog Reading | Pagsasanay sa Pagbasa | Teaching Mama"
    },
    {
        "id": "ZiQf8T9b4HY",
        "title": "Teaching Mama - Magbasa Tayo! | Tagalog Reading | Grade 1 | Pagsasanay sa Pagbasa | Teaching Mama"
    },
    {
        "id": "ZVl6oiO2o9Y",
        "title": "Teaching Mama - Magbasa Tayo! | Tagalog Reading | Pagsasanay sa Pagbasa | Teaching Mama"
    },
    {
        "id": "MbMiL6sCS8k",
        "title": "Teaching Mama - Magbasa Tayo! | Tagalog Reading | Pagsasanay sa Pagbasa ng Pangungusap | Teaching Mama"
    },
    {
        "id": "LegGb3LBxcs",
        "title": "Teaching Mama - Magbasa Tayo! | Pagsasanay sa Pagbasa ng Pangungusap | Kinder and Grade 1 | Teaching Mama"
    },

    //Blues Cues & You 161 VIDS
    {
        "id": "14bnpTy5q2Y",
        "title": "Blues Clues & You - 2 Hours of Blue's Underwater Adventures! 🐠 | Blue's Clues & You!"
    },
    {
        "id": "scbhh6b1dCo",
        "title": "Blues Clues & You - Explore the World with Blue! 🌍 | 90 Minutes of Travel Clues & Fun | Blue's Clues & You!"
    },
    {
        "id": "6tRWIc8FBP4",
        "title": "Blues Clues & You - 2 Hours of Outdoor Fun with Blue! 🌳🎉 | Blue's Clues & You!"
    },
    {
        "id": "oDZxLhR3hN8",
        "title": "Blues Clues & You - Underwater Games & Skidoos w/ Blue! 🐠 | 30 Minute Compilation | Blue's Clues & You!"
    },
    {
        "id": "L4h6yvhbj5A",
        "title": "Blues Clues & You - 120 Minutes of Blue's Hero Celebration! 🦸 w/ Josh! | Blue's Clues & You!"
    },
    {
        "id": "PqsnZZrHWgQ",
        "title": "Blues Clues & You - 120 MINUTES of Underwater Adventures w/ Blue and Josh 🪸🐙 | Blue's Clues & You!"
    },
    {
        "id": "z3fGlWc9fMg",
        "title": "Blues Clues & You - 2 HOURS of Imagination Inspiration w/ Blue & Josh! ✨ Blue's Clues & You!"
    },
    {
        "id": "GL02V8B_HSU",
        "title": "Blues Clues & You - Sing & Dance w/ Blue for 90 MINUTES! 🕺👩‍🎤 | Blue's Clues & You!"
    },
    {
        "id": "dTJTRmxK0dU",
        "title": "Blues Clues & You - 2 HOURS of Animal Skidoos w/ Blue & Josh! 🐙🐤🦋 Blue's Clues & You!"
    },
    {
        "id": "JtkwZg1EMlc",
        "title": "Blues Clues & You - 90 Minutes of Safari Adventures! 🐵 Blue's Clues & You!"
    },
    {
        "id": "8PzZPdL0BLA",
        "title": "Blues Clues & You - Blue's Clues & You! Celebrates Helpful Heroes for 90 Minutes 👩‍🚒  | Blues Clues & You!"
    },
    {
        "id": "foZ5KQ4WxMg",
        "title": "Blues Clues & You - 120 Minutes of Magenta Vlog Adventures w/ Blue and Josh 🎥 | Blue's Clues & You!"
    },
    {
        "id": "kFpc_cfm5b8",
        "title": "Blues Clues & You - 120 Minutes of Performing Arts Fun, Games, and other Vlog Adventures w/ Blue, Magenta, and Josh 🎥"
    },
    {
        "id": "6n6qacNE8Oc",
        "title": "Blues Clues & You - Josh and Blue Become Astronauts! 👩‍🚀 Rise & Shine Podcast | Blues Clues & You!"
    },
    {
        "id": "OmrkJ0PVsPQ",
        "title": "Blues Clues & You - 120 Minutes of Fun, Games, and other Vlog Adventures w/ Blue, Magenta, and Josh 🎥"
    },
    {
        "id": "IlpGuEMlF38",
        "title": "Blues Clues & You - 120 MINUTES of Imagination Fun w/ Blue & Josh! *Outer Space & More!*  🪐 | Blue's Clues & You!"
    },
    {
        "id": "2fBmncLC3Ro",
        "title": "Blues Clues & You - Find Clues for the Dinosaur in the Egg w/ Blue & Josh! 🥚 | Blue's Clues & You!"
    },
    {
        "id": "Ts9DLdR64sM",
        "title": "Blues Clues & You - 120 Minutes of Blue's Superhero Skidoos w/ Josh! 🦸 | | Blue's Clues & You!"
    },
    {
        "id": "DcSxYKO20dg",
        "title": "Blues Clues & You - Blue & Josh Find Blue's Clues with Pearl! 🔍 | Blue's Clues & You!"
    },
    {
        "id": "BYfXDz5jRRw",
        "title": "Blues Clues & You - Farmer Josh Finds Clues at the Fair w/ Blue! 🎡 | Blue's Clues & You!"
    },
    {
        "id": "4rOU9LweI6g",
        "title": "Blues Clues & You - Go on a safari with Josh and Blue! 🦁🦒 | Blue's Clues & You! #Shorts"
    },
    {
        "id": "7_cbUeaBoGE",
        "title": "Blues Clues & You - Blue & Josh Surprise Lola with a Filipino Celebration! 🇵🇭 | Blue's Clues & You!"
    },
    {
        "id": "_3lJtGGYCag",
        "title": "Blues Clues & You - Blue and Magenta build a rocket ship! 🚀 | Blue's Clues & You! #Shorts"
    },
    {
        "id": "gwT89wHC9sw",
        "title": "Blues Clues & You - Blue Finds Clues on A Treasure Hunt Adventure! 🏝️ w/ Josh! | Blue’s Clues & You!"
    },
    {
        "id": "3D9_aSJjfPE",
        "title": "Blues Clues & You - 90 MINUTES of Fairytales and Magical Moments ✨ w/ Blue & Josh! | Blue's Clues & You!"
    },
    {
        "id": "Tziroh5niKg",
        "title": "Blues Clues & You - Blue Finds A Clue... IN OUTER SPACE! 🚀 w/ Josh | Blue's Clues & You!"
    },
    {
        "id": "HzAzlU-ZOE0",
        "title": "Blues Clues & You - 120 Minutes of Blue's Neighborhood Heroes! 🌎 w/ Josh! | Blue's Clues & You!"
    },
    {
        "id": "TK46NHf8uBs",
        "title": "Blues Clues & You - 90 MINUTES of Blue's Best Friendship Adventures! 💞 | Blue's Clues & You!"
    },
    {
        "id": "v3IHvuQfDks",
        "title": "Blues Clues & You - 120 MINUTES of Blue's Healthiest Foods! 🌽 w/ Josh! | Blue's Clues & You!"
    },
    {
        "id": "nYneqlJ3SZI",
        "title": "Blues Clues & You - Blue and Josh Find Animals and Clues in the Dark 🌙 | Blue's Clues & You!"
    },
    {
        "id": "JuVFetwo3MU",
        "title": "Blues Clues & You - Blue Skidoos After An Online Troll! 😱 w/ Josh | Blue's Clues & You!"
    },
    {
        "id": "3V7i1LGdg1Y",
        "title": "Blues Clues & You - 60 MINUTES of Blue's Bedtime Adventures! 🌙 | Sleepovers, Dreams, + More! | Blue's Clues & You!"
    },
    {
        "id": "LYIjOZpX_cA",
        "title": "Blues Clues & You - Blue & Magenta Play 'Hide & Seek' Game! 🙈 w/ Josh | Blue's Clues & You!"
    },
    {
        "id": "cyYqZeuvvbE",
        "title": "Blues Clues & You - Blue & Josh Bake Lola's Bibingka 🍍 | Blue's Clues & You!"
    },
    {
        "id": "ArVlOcmluno",
        "title": "Blues Clues & You - Josh and Blue Make YOU A Superhero! 💥 | Blue's Clues & You! #Shorts"
    },
    {
        "id": "kPvctk0q1gY",
        "title": "Blues Clues & You - Blue and Josh Find Clues and Play the Gopher Game! 🐾 w/ Shovel & Pail | Blue's Clues & You!"
    },
    {
        "id": "iPJ-pHHDf6M",
        "title": "Blues Clues & You - Blue Skidoos, Clues & Adventures VLOG Marathon! w/ Josh | 2+ Hour Compilation | Blue's Clues & You!"
    },
    {
        "id": "e5kIJf3ctag",
        "title": "Blues Clues & You - Blue and Josh Find Clues and Do a Science Experiment! 🌪️ | Blue's Clues & You!"
    },
    {
        "id": "gGY3yLYz2ZI",
        "title": "Blues Clues & You - Blue Skidoos and Music Adventures! 🐾 w/ Josh & Friends | 90 Minute Compilation | Blue's Clues & You!"
    },
    {
        "id": "t_Bt1muo6m8",
        "title": "Blues Clues & You - Blue Skidoos & Paints Unicorns and Flowers! 🦄🌷 w/ Josh | Blue's Clues & You!"
    },
    {
        "id": "3sRknUcuyNo",
        "title": "Blues Clues & You - Blue and Josh's Superhero Adventures, Mailtime & More! 🦸 | VLOG Ep. 89 | Blue's Clues & You!"
    },
    {
        "id": "te96sfrCEzo",
        "title": "Blues Clues & You - Blue Skidoos Inside a Comic Book! 🦸 w/ Josh & Periwinkle | Blue's Clues & You!"
    },
    {
        "id": "mzdy7dnFJso",
        "title": "Blues Clues & You - Blue & Josh Dress Up and Perform with Friends! 🎸 w/ Rainbow Puppy | 60 Minutes | Blue's Clues & You!"
    },
    {
        "id": "JBgCODuv694",
        "title": "Blues Clues & You - Blue and Josh Count Down their Favorite Songs! 🎵 w/ Magenta | Blue's Clues & You!"
    },
    {
        "id": "oDo8F5Mw4Yc",
        "title": "Blues Clues & You - Open Mail With Blue & Josh! ✉️ | 90 Minute Mailtime Compilation | Blue's Clues & You!"
    },
    {
        "id": "a24GRIpNkE4",
        "title": "Blues Clues & You - Blue's Play Time and Adventures with Shovel and Pail! w/ Josh | VLOG Ep. 87 | Blue's Clues & You!"
    },
    {
        "id": "qKQqG8Y-H-s",
        "title": "Blues Clues & You - Blue and Josh Find Clues at Rainbow Puppy's Concert! 🎸 | Blue's Clues & You!"
    },
    {
        "id": "CgRMFGxC0xQ",
        "title": "Blues Clues & You - Blue and Josh Make a Rainbow Heart with Buttons 🌈 w/ Slippery! #shorts"
    },
    {
        "id": "otjA9WSj4eA",
        "title": "Blues Clues & You - Guess the Missing Color Game: Weather & Seasons ☀️🌧️ w/ Blue & Josh | 2+ hours | Blue's Clues & You!"
    },
    {
        "id": "gY-RDjB1HN0",
        "title": "Blues Clues & You - Blue and Josh Sing, Dance and Find Clues w/ Lola! | 60 Minutes | Blue's Clues & You!"
    }

];

/* Remove duplicate video IDs safely */
const VIDEO_LIST = Array.from(
    new Map(RAW_VIDEO_LIST.map(v => [v.id, v])).values()
);


/* ================================
   UTILITIES
================================ */

function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}



/* ================================
   HOME PAGE
================================ */

function loadHomePage() {
    const grid = document.getElementById("videoGrid");
    if (!grid) return;

    grid.innerHTML = "";

    shuffleArray(VIDEO_LIST).forEach(video => {
        const card = document.createElement("div");
        card.className = "video-card";
        card.innerHTML = `
            <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" />
            <p>${video.title}</p>
        `;

        card.addEventListener("click", () => {
            window.location.href = `watch.html?v=${video.id}`;
        });

        grid.appendChild(card);
    });
}


/* ================================
   WATCH PAGE
================================ */

function loadWatchPage() {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get("v");
    if (!videoId) return;

    loadMainVideo(videoId);
    loadSidebar(videoId);
}

function loadMainVideo(videoId) {
    const container = document.getElementById("main-video");
    if (!container) return;

    container.innerHTML = `
        <iframe
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
            width="100%"
            height="450"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    `;
}

function loadSidebar(currentId) {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    sidebar.innerHTML = "";

    shuffleArray(
        VIDEO_LIST.filter(v => v.id !== currentId)
    )
        .slice(0, 5) // ✅ EXACTLY 5 SIDEBAR VIDEOS
        .forEach(video => {
            const item = document.createElement("div");
            item.className = "sidebar-video";
            item.innerHTML = `
            <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" />
            <p>${video.title}</p>
        `;

            item.addEventListener("click", () => {
                loadMainVideo(video.id);
                loadSidebar(video.id);
                history.pushState(null, "", `?v=${video.id}`);
            });

            sidebar.appendChild(item);
        });
}




/* ================================
   NAVIGATION
================================ */

function goHome() {
    window.location.href = "index.html";
}


/* ================================
   AUTO BOOTSTRAP
================================ */

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("videoGrid")) {
        loadHomePage(); // home page randomizes on reload
    }

    if (document.getElementById("main-video")) {
        loadWatchPage(); // watch page loads + random sidebar
    }
});


c