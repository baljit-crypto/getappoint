const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL,{
    dbName: "AppointmentDB",
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log(`Mongose connected to AppointmentDB`);
})

mongoose.connection.on('error', (err) => {
    console.log(`Mongose connection error: `,err);
})

mongoose.connection.on('disconnected', () => {
    console.log(`Mongose disconnected`);
})

require('./user');
require('./inviter');