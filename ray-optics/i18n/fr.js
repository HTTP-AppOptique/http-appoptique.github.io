if (typeof locales == 'undefined') locales = {};
locales["fr"] = {
  "lang": {
    "message": "Français"
  },
  "font": {
    "message": "Arial"
  },
  "page_title": {
    "message": "Simulateur d'optique géométrique - Accueil"
  },
  "title": {
    "message": "Simulateur d'optique géométrique"
  },
  "description": {
    "message": "Une application web libre pour simuler la réflexion et réfraction de la lumière. <br>Ecrit en HTML, CSS et JavaScript."
  },
  "copyright": {
  "message": "(copyright 2016-2018) <a href='https://github.com/ricktu288' style='color:rgba(255,255,255,0.25)'>ricktu288</a>, <a href='https://github.com/j3soon' style='color:rgba(255,255,255,0.25)'>j3soon</a> |  (copyright 2021) <a href='https://github.com/atarox30' style='color:rgba(255,255,255,0.25)'>AtaRox30</a>, <a href='https://github.com/sebastienjean' style='color:rgba(255,255,255,0.25)'>sebastienjean</a> <br/><br/>" +
  "<i>Le développement de ce logiciel a été soutenu financièrement par l'ANR (Agence Nationale de la Recherche), dans le cadre de l'appel à projets NCU (Nouveaux Cursus Universitaires) 'Hybridation des formations de l'enseignement supérieur', à travers le projet HTTP (Hybridation Technologique et Travaux Pratiques) [ANR-20-NCUN-0001].</i>"
  },
  "start": {
    "message": "Démarrer"
  },
  "github_link": {
    "message": "Voir le code source"
  },
  "zip-link": {
    "message": "Télecharger"
  },
  "tools": {
    "message": "Outils"
  },
  "ray": {
    "message": "Rayon"
  },
  "ray_desc": {
    "message": "Un rayon de lumière unique définit par deux points."
  },
  "beam": {
    "message": "Faisceau"
  },
  "beam_desc": {
    "message": "Un faisceau de rayons parallèles émergeant d'un segment, avec une densité controlée par le curseur 'Densité de rayons'."
  },
  "point_source": {
    "message": "Source ponctuelle"
  },
  "point_source_desc": {
    "message": "Rayons émergeant d'un point unique, avec un nombre de rayons controlé par le curseur 'Densité de rayons'."
  },
  "mirror": {
    "message": "Miroir"
  },
  "mirror_desc": {
    "message": "Simule la réflexion de la lumière sur un miroir."
  },
  "mirror_arc": {
    "message": "Miroir (Arc)"
  },
  "mirror_arc_desc": {
    "message": "Un miroir dont la forme est un arc de cercle, défini par trois points."
  },
  "ideal_curved_mirror": {
    "message": "Miroir courbe idéal"
  },
  "ideal_curved_mirror_desc": {
    "message": "Un miroir courbe qui obéit exactement à l'équation (1/p + 1/q = 1/f). La distance focale (en centimètre) peut être définie directement (glisser ou cliquer pour le créer)"
  },
  "glass_halfplane": {
    "message": "Verre"
  },
  "glass_halfplane_desc": {
    "message": "Simule la réfraction et la réflexion de la lumière sur une surface. L'intensité est calculée en considérant que la lumière est non-polarisée (glisser ou cliquer pour le créer)"
  },
  "glass_circle": {
    "message": "Verre (cercle)"
  },
  "glass_circle_desc": {
    "message": "Verre avec une forme circulaire, définie par son centre et un point sur sa surface."
  },
  "glass": {
    "message": "Verre (autres formes)"
  },
  "glass_desc": {
    "message": "Verre avec une forme quelconque construite avec des segments et des arcs de cercles, prismes et lentilles sphériques inclus."
  },
  "ideal_lens": {
    "message": "Verre (Lentille idéale)"
  },
  "ideal_lens_desc": {
    "message": "Une lentille obéissant exactement à l'équation de lentille (1/p' + 1/p = 1/f'). La distance focale (en centimètres) peut être définie directement."
  },
  "blocker": {
    "message": "Diaphragme"
  },
  "blocker_desc": {
    "message": "Un segment absorbant les rayons incidents."
  },
  "ruler": {
    "message": "Règle"
  },
  "ruler_desc": {
    "message": "Une règle, définie par ses extrémités, avec une échelle en centimètre."
  },
  "protractor": {
    "message": "Rapporteur"
  },
  "protractor_desc": {
    "message": "Un rapporteur, défini par son centre et un autre point pour l'angle zéro, avec une échelle en degrés."
  },
  "views": {
    "message": "Vues"
  },
  "rays": {
    "message": "Rayons"
  },
  "rays_desc": {
    "message": "Montre les rayons. Quand la 'Densité de rayons' est élevée, ils paraissent continus."
  },
  "extended_rays": {
    "message": "Rayons étendus"
  },
  "extended_rays_desc": {
    "message": "Montre les rayons et leur extensions. Le orange indique les extensions arrière, le gris les extensions avant."
  },
  "all_images": {
    "message": "Toutes images"
  },
  "all_images_desc": {
    "message": "Montre la position de toutes les images. Les points jaunes indiquent les images réelles, les points orange indiquent les images virtuelles et les points gris (absents sur l'image) indiquent les objets virtuels. Notons que certaines images ne peuvent pas être detectées si la 'Densité de rayons' n'est pas suffisament grande."
  },
  "seen_by_observer": {
    "message": "Vu par un observateur"
  },
  "seen_by_observer_desc": {
    "message": "Simule les rayons et images vus depuis une certaine position. Le cercle bleu est l'observateur. N'importe quel rayon traversant ce cercle est consideré comme 'observé'. L'observateur ne sait pas exactement où le rayon commence réellement, mais pensera qu'il commencent à un certain point s'ils se croisent ici. Les rayons sont montrés en bleu, et les points en orange."
  },
  "language": {
    "message": "Langue: Français"
  },
  "rotate": {
    "message": "Pivoter"
  },
  "copyright": {
    "message": "(copyright 2016-2018) <a href='https://github.com/ricktu288'>ricktu288</a>, <a href='https://github.com/j3soon'>j3soon</a> | " + "(copyright 2021) <a href='https://github.com/atarox30'>AtaRox30</a>, <a href='https://github.com/sebastienjean'>sebastienjean</a> <br/><br/> " +
    "<i>Le développement de ce logiciel a été soutenu financièrement par l'ANR (Agence Nationale de la Recherche), dans le cadre de l'appel à projets NCU (Nouveaux Cursus Universitaires) 'Hybridation des formations de l'enseignement supérieur', à travers le projet HTTP (Hybridation Technologique et Travaux Pratiques) [ANR-20-NCUN-0001].</i>"
  },
  "line": {
    "message": "Ligne"
  },
  "line_desc": {
    "message": "Une ligne simple, utilisable comme délimiteur/marqueur."
  },
  "text": {
    "message": "Texte"
  },
  "text_desc": {
    "message": "Une légende, pour un objet quelconque."
  }
};
