var prometList = [
    {
        datum: '20.06.2015',
        svrha: 'Uplata na racun',
        uplata: '1000.00',
        isplata: '',
        stanje: '3050.00'
    },
    {
        datum: '11.05.2015',
        svrha: 'Instrukcije naknada',
        uplata: '500.00',
        isplata: '200.00',
        stanje: '1050.00'
    }
];

Template.promet.helpers({
    prometi: prometList
});