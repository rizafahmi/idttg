/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/home', {name: 'dones.index'});
Router.route('/', {name: 'index'});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/
// Router.before(function () {
//   clearErrors();
//   clearNotifications();
//   this.next()
// });
var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {
        return this.render('LoginPage');
      } else {
        return this.next();
      }
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    except: ['index']
});
