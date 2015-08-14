if (Meteor.isClient) {

  Template.elements.helpers({
    accounts: function () {
      return [{
          type: 'account',
          name: 'My Account 1',
          balance: '1000000000000000000', // in wei
          address: '0x922a519ac926f69856fcfc1b2b8b846cfb3f6b4e'
      },
      {
          name: 'My Account 2',
          balance: '324567543200000013456', // in wei
          address: '0x1f93d965f60faee1085a93e99562945c1bd97be0'
      }];
    }
  });


  Template.elements.events({
    'click button.modal': function(){
      // show modal
      EthElements.Modal.show('modal_demo');
    },
    'click button.question-modal': function(){
      // show modal
      EthElements.Modal.question({
        text: 'Are you ok?',
        ok: function(){
          alert('Very nice!');
        },
        cancel: true
      });
    },
    'click button.question-modal-template': function(){
      // show modal
      EthElements.Modal.question({
        template: 'modal_demo',
        ok: function(){
          alert('Lorem ipsum!');
        },
        cancel: function(){
          alert('Ok Bye!');
        }
      });
    }
  });
}

