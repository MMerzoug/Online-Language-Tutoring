const sequelize = require('../config/connection.js');
const {
  User,
  Language,
  // Message,
  ScheduledSession,
  Student,
  // StudentLanguageLevel,
   StudentTutorPivot,
  Tutor,
  // TutorRating
} = require('../models');

const userData = require('./userSeeds.json');
const languageData = require('./languageSeeds.json');
// const messageData = require('./messageSeeds.json');
const scheduledSessionData = require('./scheduledSessionSeeds.json');
const studentData = require('./studentSeeds.json');
// const studentLanguageLevelData = require('./studentLanguageLevelSeeds.json');
 const studentTutorPivotData = require('./studentTutorPivotSeeds.json');
const tutorData = require('./tutorSeeds.json');
// const tutorRatingData = require('./tutorRatingSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Language.bulkCreate(languageData, {
    individualHooks: true,
    returning: true,
  });

  // await Message.bulkCreate(messageData, {
  //   individualHooks: true,
  //   returning: true,
  // });


  // Friday 8/11/23 5:20PM -FYI, The order of these model seeds matters. You have to make prereqs before seeding the mode that references them. So here,  Student and Tutor must be seeded before StudentTutorPivot and ScheduledSession last. At the moment, these in the correct order, but if the code changes, the order should change accordingly. -DCS

  await Student.bulkCreate(studentData, {
    individualHooks: true,
    returning: true,
  });

  await Tutor.bulkCreate(tutorData, {
    individualHooks: true,
    returning: true,
  });
  await StudentTutorPivot.bulkCreate(studentTutorPivotData, {
    individualHooks: true,
    returning: true,
  });
  await ScheduledSession.bulkCreate (scheduledSessionData, {
    individualHooks: true,
    returning: true,
  });



  // await StudentLanguageLevel.bulkCreate(studentLanguageLevelData, {
  //   individualHooks: true,
  //   returning: true,
  // });





  // await TutorRating.bulkCreate(tutorRatingData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
