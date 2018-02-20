var messages = {
  
      msgBox: document.getElementById('msgBox'),    
      
      userSubmitBtn: document.getElementById('userSubmitBtn'),
  
      guestSubmitBtn: document.getElementById('guestSubmitBtn'),    
    
      userMsg: document.getElementById('userInput'),
  
      guestMsg: document.getElementById('guestInput'),

      userMsgLi: function(){
        var userMsgLi = document.createElement('li');
        userMsgLi.className = 'userMsgLi';
        messages.msgBox.appendChild(userMsgLi);
        userMsgLi.classList.add("animated", "bounceInLeft");
        userMsgLi.textContent = this.userMsg.value;
      },
      msgBoxScroll: function(){
        this.msgBox.scrollTop = this.msgBox.scrollHeight;
      },
  
      guestMsgLi: function(){
        var guestMsgLi = document.createElement('li');
        guestMsgLi.className = 'guestMsgLi';
        messages.msgBox.appendChild(guestMsgLi);
        guestMsgLi.classList.add("animated", "bounceInRight");
        guestMsgLi.textContent = this.guestMsg.value;
        
      },
  
        displayUserMsg: function(){
          this.userSubmitBtn.addEventListener('click' || this.keyCode === 13, function(){
            if(messages.userMsg.value === ''){
               messages.userInputError();
            } else {
            console.log('User:', messages.userMsg.value);
            messages.userMsgLi();          
            messages.userMsg.value = '';
            messages.userMsg.focus();
            messages.scrollToBottom();
            messages.userTimeStamp();
            
            };
          });
        },
  
        userSubmitOnEnter: function(){
          this.userMsg.addEventListener('keyup', function(e){
          if(e.keyCode === 13){
            if(messages.userMsg.value === ''){
               messages.userInputError();
            // messages.displayUserMsg();
            } else if(e.keyCode === 13){
                console.log('Guest:', messages.userMsg.value);
                messages.userMsgLi();          
                messages.userMsg.value = '';
                messages.userMsg.focus();
                messages.scrollToBottom();
                messages.userTimeStamp();
              }
            }
          });
        },
  
        displayGuestMsg: function(){
          this.guestSubmitBtn.addEventListener('click', function(){
            if(messages.guestMsg.value === ''){
              messages.guestInputError();
            } else {
                console.log('Guest:', messages.guestMsg.value);
                messages.guestMsgLi();          
                messages.guestMsg.value = '';
                messages.guestMsg.focus();
                messages.scrollToBottom();
                messages.guestTimeStamp();
            };
          });
        },
  
         guestSubmitOnEnter: function(){
          this.guestMsg.addEventListener('keyup', function(e){
          if(e.keyCode === 13){
            if(messages.guestMsg.value === ''){
               messages.guestInputError();
            // messages.displayGuestMsg();
            } else if(e.keyCode === 13){
                console.log('Guest:', messages.guestMsg.value);
                messages.guestMsgLi();          
                messages.guestMsg.value = '';
                messages.guestMsg.focus();
                messages.scrollToBottom();
                messages.guestTimeStamp();
              }
            }
          });
        },
  
        userTimeStamp: function(){
          var time = new Date();
          var displayTime = time.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
          var timeStampEl = document.createElement('p');
          timeStampEl.innerHTML = displayTime;
          timeStampEl.classList.add("userTimeStamp", "timeStamp", "animated", "fadeIn");
          messages.msgBox.appendChild(timeStampEl);
          
      },
    
      guestTimeStamp: function(){
          var time = new Date();
          var displayTime = time.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
          var timeStampEl = document.createElement('p');
          timeStampEl.innerHTML = displayTime;
          timeStampEl.classList.add("guestTimeStamp", "timeStamp", "animated", "fadeIn");
          messages.msgBox.appendChild(timeStampEl);
          
      },
    
      userInputError: function(){
          messages.userMsg.classList.add("animated", "shake");
          window.setTimeout(function(){
            messages.userMsg.classList.remove("animated", "shake");
          }, 1000);
      },
  
      guestInputError: function(){
          messages.guestMsg.classList.add("animated", "shake");
          window.setTimeout(function(){
            messages.guestMsg.classList.remove("animated", "shake")
          }, 1000);
      },

        scrollToBottom: function(){
        messages.msgBox.scrollTo(0, messages.msgBox.scrollHeight);
        var height = messages.msgBox.scrollHeight;
        messages.msgBox.scrollTo(0, height);
      },
  
      callFunctions(){
          messages.scrollToBottom()
          messages.displayUserMsg();
          messages.displayGuestMsg();
          messages.userSubmitOnEnter();
          messages.guestSubmitOnEnter();
          messages.msgBoxScroll();
      },
  
      
};

messages.callFunctions();