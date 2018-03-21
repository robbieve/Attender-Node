'use strict'

const Route = use('Route')


Route.get('api/users', 'Api/UserController.index')
Route.get('api/employers', 'Api/EmployerController.index')
Route.get('api/devices', 'Api/GeneralController.deviceList')
Route.get('api/managements', 'Api/GeneralController.managements')
Route.get('api/timesheets', 'Api/GeneralController.timesheets')
Route.get('api/staffs', 'Api/StaffController.index')

Route.get('api/venues', 'Api/EmployerController.getVenues')
Route.get('api/organizers', 'Api/EmployerController.organisers')

Route.get('api/events', 'Api/EventController.index')
Route.get('api/messages', 'Api/GeneralController.messages')

Route.get('api/push-interest/event/:event/:staff', 'Api/GeneralController.pushEventInterest')
Route.get('api/push-interest/venue/:venue/:staff', 'Api/GeneralController.pushVenueInterest')
Route.get('api/push-message/:id', 'Api/GeneralController.pushMessage')


Route.group('api', function() {
  Route.post('auth/resend', 'Api/AuthController.resend')
  Route.get('auth/current', 'Api/AuthController.current')
  Route.post('auth/change-email', 'Api/AuthController.changeEmail')

  // PAYMENT MANAGEMENT
  Route.get('earnings', 'Api/PaymentController.earnings')
  Route.get('transactions', 'Api/PaymentController.transactions')

  Route.get('cards', 'Api/PaymentController.cards')
  Route.post('add-card', 'Api/PaymentController.addCard')
  Route.post('remove-card/:id', 'Api/PaymentController.removeCard')

  Route.get('banks', 'Api/PaymentController.banks')
  Route.post('add-bank', 'Api/PaymentController.addBank')
  Route.post('remove-bank/:id', 'Api/PaymentController.removeBank')

  Route.post('withdraw', 'Api/PaymentController.withdraw')
  Route.post('deposit', 'Api/PaymentController.deposit')

  Route.post('transfer', 'Api/PaymentController.transfer')


  // MESSAGING API MANAGEMENT
  Route.get('conversation/:convo', 'Api/MessageController.conversation')
  Route.post('conversation/:convo/delete', 'Api/MessageController.deleteConversation')
  Route.post('conversation/:convo/archive', 'Api/MessageController.archiveConversation')
  Route.post('conversation/:convo/restore', 'Api/MessageController.restoreArchive')

  Route.get('open-convo/:id', 'Api/GeneralController.openConvo')
  Route.post('new-initial-message', 'Api/VenueController.sendInitialMsg')
  Route.post('new-staff-message', 'Api/EmployerController.sendStaffMsg')
  Route.post('new-venue-message', 'Api/StaffController.sendVenueMsg')

  Route.get('staff-messages', 'Api/MessageController.staffMessages')
  Route.get('venue-messages', 'Api/MessageController.venueMessages')
  Route.get('staff-archives', 'Api/MessageController.staffArchives')
  Route.get('venue-archives', 'Api/MessageController.venueArchives')

  // STAFF API MANAGEMENT
  Route.get('my-managements', 'Api/StaffController.myManagements')
  Route.get('staff/:id/show', 'Api/StaffController.showStaff')
  Route.get('staff/:id/task', 'Api/StaffController.getTask')
  Route.get('staff/:id/managements', 'Api/StaffController.getManagements')
  Route.get('staff/:id/reviews', 'Api/StaffController.getReviews')
  Route.get('staff-notifications', 'Api/StaffController.notifications')

  Route.get('user/profile/staff', 'Api/UserController.getStaffProfile')
  Route.post('user/profile/staff', 'Api/UserController.saveStaffProfile')
  Route.post('user/profile/deactivate-user', 'Api/UserController.deactivateUser')
  Route.get('trial-staffs', 'Api/EmployerController.trialStaffs')
  Route.get('active-staffs', 'Api/EmployerController.activeStaffs')

  Route.post('trial/:id', 'Api/StaffController.trial')
  Route.post('direct-hire/:id', 'Api/StaffController.directHire')
  Route.post('hire/:id', 'Api/StaffController.hire')
  Route.post('remove-staff/:id', 'Api/StaffController.removeStaff')

  Route.post('add-task/:id', 'Api/StaffController.addTask')
  Route.post('add-suggestion/:id', 'Api/StaffController.addSuggestion')

  Route.post('task/:id/edit', 'Web/StaffController.editTask')
  Route.post('task/:id/delete', 'Web/StaffController.deleteTask')

  Route.post('suggestion/:id/edit', 'Web/StaffController.editSuggestion')
  Route.post('suggestion/:id/delete', 'Web/StaffController.deleteSuggestion')

  Route.post('add-rating/:type/:id', 'Api/StaffController.addRating')
  Route.post('rating/:id/edit', 'Api/StaffController.editRating')

  Route.post('save-staff-sched/:id', 'Api/StaffController.saveStaffSchedule')
  Route.post('save-staff-assignment/:id', 'Api/StaffController.saveAssignment')

  Route.post('add-staff/:id/event/:eid', 'Api/StaffController.addStaffToEvent')
  Route.post('remove-staff/:id/event/:eid', 'Api/StaffController.removeStaffFromEvent')

  Route.post('pay-staff/:id', 'Api/StaffController.payStaff')
  Route.get('management/:id/timesheet/current', 'Api/PaymentController.currentTimesheet')
  Route.get('timesheet/:id', 'Api/PaymentController.getTimesheet')
  Route.post('timesheet/:id/:action', 'Api/PaymentController.updateTimesheet')

  // VENUE API MANAGEMENT
  Route.get('my-staffs', 'Api/EmployerController.myStaffs')
  Route.get('venue/notifications', 'Api/EmployerController.notifications')
  Route.post('venue/notification/:id/delete', 'Api/EmployerController.removeNotif')
  Route.get('venue/interested', 'Api/EmployerController.interested')
  Route.post('venue/:id/interest', 'Api/EmployerController.interest')

  Route.get('user/profile/venue', 'Api/EmployerController.getVenueProfile')
  Route.post('user/profile/venue', 'Api/EmployerController.saveVenueProfile')

  // ORGANIZER API MANAGEMENT
  Route.get('user/profile/organizer', 'Api/EmployerController.getOrganizerProfile')
  Route.post('user/profile/organizer', 'Api/EmployerController.saveOrganizerProfile')

  // USER API MANAGEMENT
  Route.post('user/profile/change-email', 'Api/UserController.changeEmail')
  Route.post('user/profile/change-password', 'Api/UserController.changePassword')

  // EVENT API MANAGEMENT
  Route.get('events', 'Api/EventController.index')
  Route.post('my-events', 'Api/EventController.myEvents')
  Route.post('events', 'Api/EventController.create')
  Route.get('events/:id/interested', 'Api/EventController.interested')
  Route.post('events/:id/interest', 'Api/EventController.interest')


}).prefix('api').middleware('guard')

Route.post('api/auth/login/facebook', 'Api/AuthController.facebookAuth')
Route.post('api/auth/login/google', 'Api/AuthController.googleAuth')
Route.post('api/auth/login', 'Api/AuthController.login')

Route.post('api/auth/register', 'Api/AuthController.register')
Route.post('api/auth/register/google', 'Api/AuthController.googleReg')
Route.post('api/auth/register/facebook', 'Api/AuthController.facebookReg')

Route.post('api/auth/confirm', 'Api/AuthController.confirm')
Route.post('api/auth/verify', 'Api/AuthController.verify')


Route.group('manage', function() {
  Route.get('/', 'Admin/HomeController.index')
  Route.get('logout', 'Admin/AuthController.logout')
  Route.resource('users', 'Admin/UserController')

  Route.resource('venues', 'Admin/VenueController')

  Route.get('organisers', 'Admin/OrganizerController.index')

  Route.get('staffs', 'Admin/StaffController.index')

  Route.get('events', 'Admin/EventController.index')

}).prefix('manage').middleware('admin')


Route.group('user', function(){
  Route.get('logout', 'Web/AuthController.logout')
  Route.get('verify-email', 'Web/AuthController.verify')
  Route.get('profile-setup', 'Web/AuthController.setupProfile')
  Route.post('profile-setup', 'Web/AuthController.saveProfile')
  Route.post('profile-setup', 'Web/AuthController.saveProfile')
  Route.post('save-staff-profile', 'Web/StaffController.save')
  Route.post('save-venue-profile', 'Web/VenueController.save')
  Route.post('save-organiser-profile', 'Web/OrganizerController.save')
}).middleware('user')


Route.group('nonuser', function() {
  Route.get('register', 'Web/AuthController.getRegister')
  Route.post('register', 'Web/AuthController.register')
  Route.get('forgot-password', 'Web/AuthController.forgotPass')
  Route.post('forgot-password', 'Web/AuthController.forgot')
  Route.get('login', 'Web/AuthController.login')
  Route.post('login', 'Web/AuthController.login')
  Route.get('reset-password/:token*', 'Web/AuthController.reset')
  Route.post('reset-password/:token*', 'Web/AuthController.resetPost')
  Route.get('email/verify/:verification/:token*', 'Admin/AuthController.verification')
}).middleware('nonuser')

Route.group('nonadmin', function() {
  Route.get('manage/login', 'Admin/AuthController.login')
  Route.post('manage/login', 'Admin/AuthController.login')
}).middleware('nonadmin')

Route.get('seed', 'Admin/SeedController.create')
Route.get('calendar', 'Api/EventController.calendar')
Route.post('send-test', 'Api/GeneralController.sendNotif')
Route.get('staffs', 'Api/GeneralController.staffs')
Route.get('management/:id/timesheet/current', 'Api/PaymentController.currentTimesheet')
Route.get('timesheet/:id', 'Api/PaymentController.getTimesheet')
Route.post('timesheet/:id/:action', 'Api/PaymentController.updateTimesheet')
Route.post('save-staff-assignment/:id', 'Api/StaffController.saveAssignment')


Route.group('promisepay-callbacks', function() {
  Route.get('items', 'Api/GeneralController.items')
  Route.post('items', 'Api/GeneralController.itemUpdates')
  Route.post('transactions', 'Api/GeneralController.transactionUpdates')
}).prefix('api/promise-pay')
