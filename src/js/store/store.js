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
                   profile: "https://media.istockphoto.com/photos/beautiful-profile-picture-id182773387?k=6&m=182773387&s=612x612&w=0&h=kXCC5JaOAdOUE5iyd9F2YocAk2O3OEmj6scZs2-QtEk="
                },
                {
                   full_name: "Erick Pired",
                   address:"1111 SW 23ST, 33233 FL, USA",
                   phone:"(786) 412 526",
                   email: "Machete@gmail.com",
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
                   profile: "https://image.shutterstock.com/image-photo/beautiful-african-american-woman-smiling-260nw-402466177.jpg"
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

