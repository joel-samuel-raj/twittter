<template>
<div id = app class = "flex container h-screen w-full">
  <div class = "lg:w-1/5 border-r border-light lg:px-6 px-2 py-2 flex flex-col justify-between">
    <div>
    <button class = "h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue">
          <i class="fab fa-twitter"></i>
        </button>
        <div>
          <button v-for="tab in tabs" @click = "id = tab.id" :class = " `focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${id === tab.id ? 'text-blue' : ''}`">
            <i :class = "`${ tab.icon } text-2xl mr-4 text-left`"></i>
            <p class= "text-lg font-semibold hidden lg:block">{{  tab.title}} </p>
          </button>
        </div>
        <button class = "text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
          <p class = "hidden lg:block">tweet</p>
          <i class="fas fa-plus lg:hidden"></i>
        </button>
    </div> 
    <div class= "lg:w-full relative">
      <button @click = "dropdown = true" class = "flex item-center w-full hover:bg-lightest pd-2 rounded-full focus:outile-none">
        <img src="https://forums.pokemmo.eu/uploads/monthly_2021_03/dccll2q-02120748-c9c2-47c7-99c1-2209f8ea428e.thumb.jpg.0c882a7cf2a4d7033f0860274f6e0c3f.jpg" alt="profile" class = "w-10 h-10 rounded-full border border-lighter">
        <div class = "hidden lg:block ml-4">
          <p class = "text-sm font-bold leading-tight"> Joel Samuel </p>
          <p class = "text-sm leading-tight"> @_joel.sr1024 </p>
        </div>
        <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
      </button>
      <div v-if = "dropdown === true" class="absolute bottom-0 left-0 w-64 rounded-large shadow-md border-lightest bg-white mb-16">
        <button @click = "dropdown = false" class = "flex item-center w-full hover:bg-lightest p-3  focus:outile-none">
          <img src="https://forums.pokemmo.eu/uploads/monthly_2021_03/dccll2q-02120748-c9c2-47c7-99c1-2209f8ea428e.thumb.jpg.0c882a7cf2a4d7033f0860274f6e0c3f.jpg" alt="profile" class = "w-10 h-10 rounded-full border border-lighter">
          <div class = "ml-4">
            <p class = "text-sm font-bold leading-tight"> Joel Samuel </p>
            <p class = "text-sm leading-tight"> @_joel.sr1024 </p>
          </div>
          <i class="fas fa-check m-auto mr-3 text-blue"></i>
        </button>
        <button @click = "dropdown = false" class = "w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm focus:outline-none">
          Add an existing account
        </button>
        <button @click = "dropdown = false"  class = "w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm focus:outline-none">
          Log out @_joel.sr1024
        </button>
      </div>
    </div>
  </div>
                                          <!--tweets-->
  <div class="lg:w-1/2 h-full overflow-y-scroll">
    <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
      <h1 class="text-xl font-bold"> Home </h1>
      <i class="far fa-star text-xl text-blue"></i>
    </div>
    <div class="px-5 py-3 border-b border-lighter flex">
      <div class = "flex-none">
        <img src="https://forums.pokemmo.eu/uploads/monthly_2021_03/dccll2q-02120748-c9c2-47c7-99c1-2209f8ea428e.thumb.jpg.0c882a7cf2a4d7033f0860274f6e0c3f.jpg" alt="profile" class = "w-12 h-12 rounded-full border border-lighter">
      </div>
      <form v-on:submit.prevent = "addNewTweet" class="w-full px-4 relative">
        <textarea v-model="tweet.content" class="w-full focus:outline-none mt-3 pb-3" id="" placeholder = "Whats'up?✉️"/>
        <div class = "flex items-center">
          <i class="text-lg text-blue mr-4 far fa-image"></i>
          <i class="text-lg text-blue mr-4 far fa-film"></i>
          <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
          <i class="text-lg text-blue mr-4 far fa-smile"></i>
        </div>
        <button type="submit" class = "h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0 ">
          tweet
        </button>
      </form>
    </div>
     <div class="flex flex-col-reverse">
        <div v-for="tweet in tweets" class="w-full p-4 border-b hover:bg-lighter flex">
          <div class="flex-none mr-4">
            <img src="https://forums.pokemmo.eu/uploads/monthly_2021_03/dccll2q-02120748-c9c2-47c7-99c1-2209f8ea428e.thumb.jpg.0c882a7cf2a4d7033f0860274f6e0c3f.jpg" class="h-12 w-12 rounded-full flex-none"/>
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold"> Joel Samuel </p>
              <p class="text-sm text-dark ml-2"> @_joel.sr1024 </p>
              <p class="text-sm text-dark ml-2"> 1 sec </p>
              <i class="fas fa-angle-down text-dark ml-auto"></i>
            </div>
            <p class="py-2">
              {{ tweet.content }}
            </p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <i class="far fa-comment mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-retweet mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-heart mr-3"></i>
                <p> 1 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div v-for = "follow in following" class = "w-full p-4 border-b hover:bg-lighter flex">
      <div class="flex-none mr-4">
        <img :src="`${follow.src}`" alt="profile" class = "w-12 h-12 rounded-full flex-none">
      </div>
      <div class="w-full">
        <div class="flex items-center w-full">
          <p class="font-semibold ml-2"> {{follow.name}} </p>
          <p class="text-sm text-dark ml-2"> {{follow.time}} </p>
          <i class="fas fa-angle-down text-dark ml-auto"></i>
        </div>
        <p class = "py-2">
          {{follow.tweet}}
        </p>
        <div class = "flex items-center justify-between w-full">
          <div class="flex items-center text-sm text-l">
            <i class = "mr-3 far fa-comment"></i>
            <p> {{follow.comments}} </p>
          </div>
          <div class="flex items-center text-sm text-l">
            <i class = "mr-3 fas fa-retweet"></i>
            <p> {{follow.retweets}} </p>
          </div>
          <div class="flex items-center text-sm text-l">
            <i class = "mr-3 fas fa-heart"></i>
            <p> {{follow.like}} </p>
          </div>
          <div class="flex items-center text-sm text-l">
            <i class = "mr-3 fas fa-share-square"></i>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
    <input type="text" class = "mb-4 pl-12 rounded-full w-full p-2 bg-lighter text-sm focus:outline-none" placeholder="Search twitter "/>
    <i class="fas fa-search absolute left-0 top-0 mt-4 ml-12 text-sm text-light "></i>
    <div class="w-full rounded-lg bg-lightest p-3">
      <div class="flex items-center justify-between p-3">
        <p class = "text-lg font-bold"> Trends for You</p>
        <i class="fas fa-cog text-lg text-blue"></i>
      </div>
      <button v-for="trend in trending" class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
        <div>
          <p class="leading-tight text-sm text-left"> {{trend.top}} </p>
          <p class="leading-tight font-bold text-left"> {{trend.title}} </p>
          <p class="leading-tight text-left text-dark">  {{trend.bottom}} </p>
        </div>
        <i class="fas fa-angle-down text-lg text-dark"></i>
      </button>
      <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show More
      </button>
    </div>
     <div class="w-full rounded-lg bg-lightest p-3">
      <div class="p-3">
        <p class = "text-lg font-bold"> Who to follow </p>
      </div>
      <button v-for="friend in friends" class="w-full flex hover:bg-lighter p-3 border-t border-lighter">
         <img :src="`${friend.src}`" class = "h-16 w-16 rounded-full">
        <div class = "hidden lg:block ml-4">
          <p class = "text-sm font-bold leading-tight"> {{friend.name}} </p>
          <p class = "text-sm leading-tight"> {{friend.handle}} </p>
        </div>
        <button class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue">
          Follow
        </button>
      </button>
      <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show More
      </button>
    </div>
  </div>
</div>
</template>

<script>

import './assets/tailwind.css';
export default {
  name: 'App',
  components: {},
  data() {
    return {
        tabs: [
        {icon: 'fas fa-home', title: 'Home', id:'home'},
        {icon: 'fas fa-hashtag', title: 'Explore', id: 'explore'},
        {icon: 'far fa-bell', title: 'Notifications', id: 'notifications'},
        {icon: 'far fa-envelope', title: 'Messages', id: 'messages'},
        {icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks'},
        {icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists'},
        {icon: 'far fa-user', title: 'Profile', id: 'profile'},
        {icon: 'fas fa-ellipsis-h', title: 'More', id: 'more'}
      ],
      id : 'home',
      dropdown : false,
       trending: [
        {top: 'Trending in TX', title: 'Gigi', bottom: 'Trending with: Rip Gigi'},
        {top: 'Music', title: 'We Won', bottom: '135K Tweets'},
        {top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets'},
        {top: 'Trending in US', title: 'Denim Day', bottom: '40k tweets'},
        {top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets'},
      ],
      friends: [
        {src: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704', name: 'Elon Musk', handle: '@teslaBoy'},
        {src: 'https://i.pinimg.com/236x/68/d6/79/68d679ef7f6cdab2b91f7a434ba8c1bb.jpg', name: 'Adrian Monk', handle: '@detective:)'},
        {src: 'https://images.news18.com/ibnlive/uploads/2021/08/kevin-pietersen-1-1260x6571.jpg', name: 'Kevin Hart', handle: '@miniRock'}
      ],
      following: [
        {src: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704', name: 'Elon Musk', handle: '@teslaBoy', time: '20 min', tweet: 'Should I just quarantine on mars??', comments: '1,000', retweets: '550', like: '1,000,003'},
        {src: 'https://images.news18.com/ibnlive/uploads/2021/08/kevin-pietersen-1-1260x6571.jpg', name: 'Kevin Hart', handle: '@miniRock', time: '55 min', tweet: 'Should me and the rock do another sub-par movie together????', comments: '2,030', retweets: '50', like: '20,003'},
        {src: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '100,000', retweets: '1,000,002', like: '5,000,003'},
        {src: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Just did something crazyyyyyyy', comments: '100,500', retweets: '1,000,032', like: '5,000,103'}
      ],
      tweets : [
        {content : "Vue is better than React !"}
      ],
      tweet : {content : ""}
    }
  },
  methods : {
    addNewTweet () {
      let newTweet = {
        content : this.tweet.content
      };
      this.tweets.push(newTweet)
    }
  }
};
</script>


