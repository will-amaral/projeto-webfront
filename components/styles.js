const styles = {
    background: {
        background: `linear-gradient(
            rgba(0, 158, 108, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(/static/img/bg.jpg) no-repeat center center fixed`,
        backgroundSize: 'cover' 
    },
    logo: {
        width: 90, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginBottom: 30
    },
    gradient: {
        background: `linear-gradient(
            141deg, #04DB92 0%, #00D9D5 100%)`
    },
    levelBar: {
        borderRadius: '10%', 
        width: '100%', 
        height: '0.2rem', 
        marginTop: 20,
    },
    sectionTitle: {
        color: '#BBBBBB',
        fontWeight: '400',
        letterSpacing: '0.1rem'
    },
    separator: {
        width: '100%', 
        height: '0.05rem', 
        backgroundColor: '#BBBBBB',
        marginBottom: 10
    }
}

export default styles;