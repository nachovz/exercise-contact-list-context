const getState = (scope) => {
    return {
        store: {
            //Your data structures, A.K.A Entities
            contacts: [
                {
                   full_name: "Diana Bradley",
                   address:"47568 NW 34ST, 33434 FL, USA",
                   phone:"(786) 444 453",
                   email:"dave@gmail.com",
                   profile: "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
                },
                {
                   full_name: "Erick Pired",
                   address:"1111 SW 23ST, 33233 FL, USA",
                   phone:"(786) 412 526",
                   email: "epir@gmail.com",
                   profile: "https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg"
                },
                {
                   full_name: "Juan El Monte",
                   address:"443 NW 34ST, 32213 FL, USA",
                   phone:"(786) 111 566",
                   email: "Juanmonte@gmail.com",
                   profile: "https://iamchrisstock.com/wp-content/uploads/bb-plugin/cache/chris-stock-profile-circle.jpg"
                },
                {
                   full_name: "Andrea Tiraba",
                   address:"47568 NW 34ST, 33434 FL, USA",
                   phone:"(786) 444 566",
                   email: "andres@gmail.com",
                   profile: "https://www.iti.org.uk/images/article-images/Profile-Interview-Photo---Fiona-Gray.jpg"
                }
            ]
        },
        actions: {
            //(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            addContact: (_name, _address, _phone, _email, _picture) => {
                let { store } = scope.state;
                store.contacts.push(
                    {
                        full_name: _name,
                        address: _address,
                        phone: _phone,
                        email: _email
                        
                    })
            }
        }
    };
};

export default getState;

