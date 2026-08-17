// auth.js
const supabase = supabase.createClient('TWÓJ_URL', 'TWÓJ_KLUCZ');

async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser();
    
    // Jeśli nie ma użytkownika, a nie jesteś na stronie logowania - przekieruj
    if (!user && window.location.pathname !== '/login.html') {
        window.location.href = '/login.html';
    }
    return user;
}

// Wywołaj to przy starcie każdej strony
checkUser();