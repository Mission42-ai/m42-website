
/**
 * Hilfsfunktionen für den Umgang mit Bildern
 */

// Bild-Import Pfade
export const imagePaths = {
  brand: {
    logo: 'https://udvxxnqecndjrhldjqqy.supabase.co/storage/v1/object/public/assets/mission42-logo.png',
    footerLogo: 'https://udvxxnqecndjrhldjqqy.supabase.co/storage/v1/object/public/assets/mission42-logo.png',
    favicon: 'https://udvxxnqecndjrhldjqqy.supabase.co/storage/v1/object/public/assets//favicon%20.ico',
    // Weitere Markenbilder hier hinzufügen
  },
  customers: {
    // Hier Kundenpfade hinzufügen, wenn vorhanden
  },
  people: {
    // Hier Pfade zu Community-Mitgliedern hinzufügen, wenn vorhanden
  },
  products: {
    // Hier Produktbildpfade hinzufügen, wenn vorhanden
  }
};

/**
 * Holt ein Bild basierend auf der Kategorie und dem Namen
 */
export const getImage = (category: keyof typeof imagePaths, name: string): string => {
  const categoryImages = imagePaths[category];
  if (!categoryImages || !(name in categoryImages)) {
    console.warn(`Bild nicht gefunden: ${category}/${name}`);
    return '';
  }
  
  return categoryImages[name as keyof typeof categoryImages];
};
