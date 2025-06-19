async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/PedroHenriqueRebechi/Javascript_Developer/refs/heads/main/Curriculo%20Online/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}