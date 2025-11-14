let links = [
    {
        name: 'Classroom',
        link: 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fclassroom.google.com%2F&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hd=stpaulsschool.org.uk',
        logo: 'https://edu.google.com/images/svg/gsuite-icons/classroom.svg',
    },
    {
        name: 'To do',
        link: 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fclassroom.google.com%2Fa%2Fnot-turned-in%2Fall&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hd=stpaulsschool.org.uk',
        logo: 'https://edu.google.com/images/svg/gsuite-icons/classroom.svg',
    },
    {
        name: 'Drive',
        link: 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdrive.google.com%2F&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hd=stpaulsschool.org.uk',
        logo: 'https://edu.google.com/images/svg/gsuite-icons/drive.svg',
    },
    {
        name: 'Calendar',
        link: 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fu%2F0%2Fr%2Fweek&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hd=stpaulsschool.org.uk',
        logo: 'https://edu.google.com/images/svg/gsuite-icons/calendar.svg',
    },
    {
        name: 'Docs',
        link: 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2F&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hd=stpaulsschool.org.uk',
        logo: 'https://edu.google.com/images/svg/gsuite-icons/docs.svg',
    },
    {
        name: 'Slides',
        link: 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fpresentation%2F&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hd=stpaulsschool.org.uk',
        logo: 'https://edu.google.com/images/svg/gsuite-icons/slides.svg',
    },
    {
        name: 'Sheets',
        link: 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2F&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hd=stpaulsschool.org.uk',
        logo: 'https://edu.google.com/images/svg/gsuite-icons/sheets.svg',
    },
    {
        name: 'Intranet',
        link: 'https://intranet.stpaulsschool.org.uk/',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQrLMdOmPv-5P8m0lCZKW5iThTyVaTMLShg&s',
    },
    {
        name: 'Lunch Menu',
        link: 'https://intranet.stpaulsschool.org.uk/catering',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQrLMdOmPv-5P8m0lCZKW5iThTyVaTMLShg&s',
    },
    {
        name: 'Outlook',
        link: 'https://outlook.office.com/mail/0/inbox',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg',
    },
    {
        name: 'SOCS',
        link: 'https://www.socscms.com/login/232/pupil',
        logo: 'images/croppedsocslogo.png',
    },
    {
        name: 'Pupil Portal',
        link: 'https://pupils.stpaulsschool.org.uk/',
        logo: 'https://www.stpaulsschool.org.uk/wp-content/uploads/2019/05/St-Pauls-Logo-300x300.png',
    },
    {
        name: 'Library Catalogue',
        link: 'https://webopac.stpaulsschool.org.uk/cirqa-web-app/',
        logo: 'https://cirqa.co.uk/wp-content/uploads/Book-heartturqtext.png',
    },
    {
        name: 'Onshape',
        link: 'https://sps.onshape.com/',
        logo: 'https://play-lh.googleusercontent.com/yAS9WJJnjlCx77RxIvJSssrixhCdUxnBlM3CuPnQpl8QI3Ez19KreBL4xREc1gtmK_Y',
    },
    {
        name: 'Foldr',
        link: 'https://foldr.stpaulsschool.org.uk/',
        logo: 'https://foldr.com/media/2023/05/cropped-Foldr-Icon-Main.png',
    },
    {
        name: 'Maths Hub',
        link: 'https://sites.google.com/stpaulsschool.org.uk/team/home',
        logo: 'https://www.stpaulsschool.org.uk/wp-content/uploads/2019/05/St-Pauls-Logo-300x300.png',
    },
    {
        name: 'History Hub',
        link: 'https://sites.google.com/stpaulsschool.org.uk/historyhub/home',
        logo: 'https://www.stpaulsschool.org.uk/wp-content/uploads/2019/05/St-Pauls-Logo-300x300.png',
    },
    {
        name: 'Book Blog',
        link: 'https://sps-bookblog.blogspot.com',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Blogger_icon_2017.svg/1024px-Blogger_icon_2017.svg.png'
    },
    {
        name: 'Fun Dale Games',
        link: 'https://fundalegames.github.io/',
        logo: 'https://external-preview.redd.it/youtube-dale-charman-travels-part-1-london-underground-full-v0-95z6YumopKViJMw9Y6RmkNRZwUFSNmo0xJKrCkrWS7I.jpg?format=pjpg&auto=webp&s=a4393ca52796ae88e3a97e2be893e8ca16be3b79'
    },
    {
        name: 'Feedback',
        link: 'https://forms.gle/rQR9btgXVkg6itiy8',
        logo: '',
        background:
            'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    },
];
