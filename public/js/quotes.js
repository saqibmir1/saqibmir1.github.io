 
function randomQuote() {
          var quotes = [

            "❝There is an infinite amount of hope in the universe ... but not for us.❞",
            "❝I have the true feeling of myself only when I am unbearably unhappy.❞",
            "❝Slept, awoke, slept, awoke, miserable life.❞",
            "❝I had only a little time left and I didn't want to waste it on God.❞",
            "❝I do not believe in God and I am not an atheist.❞",
            "❝Fiction is the lie through which we tell the truth.❞",
            "❝But in the end one needs more courage to live than to kill himself.❞",
            "❝The abyss of my self is perilous agony.❞",
            "❝Hell is other people.❞",
            "❝How about if I sleep a little bit longer and forget all this nonsense.❞",
            "❝Existence is illusory and it is eternal.❞",
            "❝We are all in the gutter, but some of us are looking at the stars.❞",
            "❝Everything has been figured out, except how to live.❞",
            "❝Life begins on the other side of despair.❞",
            "❝Being is. Being is in-itself. Being is what it is.❞",
            "❝Three o’clock is always too late or too early for anything you want to do.❞",
            "❝Should i kill myself or have a cup of coffee?.❞",
            "❝What i wouldn't give to be normal. To live in that bubble. Reality of the naive.❞",
            "❝What do you do from morning to night? I endure myself❞",
            "❝Is it possible that existence is our exile and nothingless our home?❞",
            "❝Melancholy: an appetite no misery satisfies.❞",
            "❝Tears do not burn except in solitude.❞",
            "❝Sometimes i wish i were a cannible - less for the pleasure of eating someone than for the pleasure of vomiting him.❞",
            "❝I feel completely detached from any country, any group. I am a metaphysically displaced person.❞",
            "❝I am simply an accident. Why take it all so seriously?❞",
            "❝In every man sleeps a prophet, and when he wakes there is a little more evil in the world.❞",
            "❝Tell me how you want to die, and I'll tell you who you are.❞",

            "❝Life is Roblox❞",
            "❝Dont be a fool, get a pool❞",
            "❝Budget Approved!!!❞",
            "❝Congratulations, you played yourself.❞",
            "❝The key to more success is coco butter❞",
            "❝You smart! You loyal! You’re a genius!❞",
            "❝I call her Chandelier!!!❞",
            "❝SATA ANDAGIIIIIIIII!!!❞"

          ];
          var randomIndex = Math.floor(Math.random() * quotes.length);
          document.getElementById("random-quote").innerHTML = quotes[randomIndex];
        }
