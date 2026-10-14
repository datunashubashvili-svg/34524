/**
 * UPGRADER.BRAINROT - COMPLETE ENGINE
 * - Studio Web Audio Synthesizer
 * - Multi-item wager selection, quick preset buttons above target price
 * - Spin direction (Clockwise / Counter-Clockwise) & Turbo mode (⚡ Fast Spin)
 * - Provably Fair verification
 * - Trade-up contracts (5-in-1 Crafting)
 * - Meme Upgrade Duels against Bots
 * - Daily Wheel of Fortune
 * - Simulated live multiplayer chat
 * - Screen Shake effects and reliable auto-save
 */

// --- 1. BRAINROT DATABASE (CANONICAL ITALIAN BRAINROT & MEMES) ---
const MEME_DATABASE = [
    // COMMON (50 - 150 🪙)
    { id: 'chipi', name: 'Chipi Chipi Chapa', tier: 'common', price: 50, icon: '🐹', file: 'chipi.png' },
    { id: 'ligma', name: 'Ligma Meme', tier: 'common', price: 60, icon: '💀', file: 'ligma.jpg' },
    { id: 'crazy_guy', name: 'Crazy Guy', tier: 'common', price: 70, icon: '🤪', file: 'crazy_guy.jpg' },
    { id: 'roblox_noob', name: 'Roblox Oof Noob', tier: 'common', price: 75, icon: '🧱', file: 'roblox_noob.png' },
    { id: 'banana', name: 'Banana Cat', tier: 'common', price: 80, icon: '🍌', file: 'banana.png' },
    { id: 'capybara', name: 'Capybara Ok I Pull Up', tier: 'common', price: 95, icon: '🥥', file: 'capybara.png' },
    { id: 'spuderman', name: 'Spuderman Dolan', tier: 'common', price: 105, icon: '🕷️', file: 'spuderman.jpg' },
    { id: 'pedro', name: 'Pedro Pedro Pedro', tier: 'common', price: 110, icon: '🦝', file: 'pedro.png' },
    { id: 'frog_man', name: 'Frog Man Ribbit', tier: 'common', price: 120, icon: '🐸', file: 'frog_man.jpg' },
    { id: 'pop_cat', name: 'Pop Cat Popping', tier: 'common', price: 130, icon: '😺', file: 'pop_cat.png' },
    { id: 'bananita', name: 'Bananita Dolfinita', tier: 'common', price: 140, icon: '🐬', file: 'bananita.png' },

    // RARE (180 - 450 🪙)
    { id: 'amogus', name: 'Amogus Sus', tier: 'rare', price: 180, icon: '📮', file: 'amogus.png' },
    { id: 'bobrito', name: 'Bobrito Bandito', tier: 'rare', price: 190, icon: '🦫', file: 'bobrito.png' },
    { id: 'svinina', name: 'Svinina Bombina', tier: 'rare', price: 210, icon: '🐷', file: 'svinina.jpg' },
    { id: 'chef', name: 'Italian Chef Boyardee', tier: 'rare', price: 220, icon: '👨‍🍳', file: 'chef.jpg' },
    { id: 'maxwell', name: 'Maxwell Spinning Cat', tier: 'rare', price: 240, icon: '🐈', file: 'maxwell.png' },
    { id: 'frigo_camelo', name: 'Frigo Camelo', tier: 'rare', price: 260, icon: '🐪', file: 'frigo_camelo.png' },
    { id: 'six_seven', name: 'Six Seven Sette', tier: 'rare', price: 270, icon: '7️⃣', file: 'six_seven.jpg' },
    { id: 'monster', name: 'Monster Ultra Energy', tier: 'rare', price: 290, icon: '⚡', file: 'monster.jpg' },
    { id: 'doge', name: 'Doge Much Wow', tier: 'rare', price: 310, icon: '🐕', file: 'doge.png' },
    { id: 'udin', name: 'Udin Din Din Din', tier: 'rare', price: 330, icon: '🔔', file: 'udin.jpg' },
    { id: 'cocofanto', name: 'Cocofanto Elefanto', tier: 'rare', price: 340, icon: '🐘', file: 'cocofanto.png' },
    { id: 'stonks', name: 'Stonks Meme Man', tier: 'rare', price: 350, icon: '📈', file: 'stonks.png' },
    { id: 'cocofanto_elephanto', name: 'Cocofanto Classic OG', tier: 'rare', price: 360, icon: '🐘', file: 'cocofanto_elephanto.jpg' },
    { id: 'floppa', name: 'Big Floppa Caracal', tier: 'rare', price: 380, icon: '🐱', file: 'floppa.png' },
    { id: 'zibra', name: 'Zibra Zubra Zebra', tier: 'rare', price: 400, icon: '🦓', file: 'zibra.jpg' },
    { id: 'chimpanzini', name: 'Chimpanzini Bananini', tier: 'rare', price: 420, icon: '🐵', file: 'chimpanzini.png' },
    { id: 'pepe', name: 'Pepe The Rare Frog', tier: 'rare', price: 440, icon: '🐸', file: 'pepe.png' },

    // EPIC (550 - 1400 🪙)
    { id: 'boneca', name: 'Boneca Ambalabu', tier: 'epic', price: 580, icon: '🪆', file: 'boneca.png' },
    { id: 'burgoro_and_fryuro', name: 'Burgoro & Fryuro', tier: 'epic', price: 640, icon: '🍔', file: 'burgoro_and_fryuro.jpg' },
    { id: 'spaghetti_tualetti', name: 'Spaghetti Tualetti', tier: 'epic', price: 680, icon: '🍝', file: 'spaghetti_tualetti.jpg' },
    { id: 'bombombini', name: 'Bombombini Gusini', tier: 'epic', price: 720, icon: '🪿', file: 'bombombini.png' },
    { id: 'ishowegg', name: 'IShowEgg Speed', tier: 'epic', price: 780, icon: '🥚', file: 'ishowegg.PNG' },
    { id: 'glorbo', name: 'Glorbo Extraterrestrial', tier: 'epic', price: 850, icon: '👾', file: 'glorbo.jpg' },
    { id: 'skibidi_pizza', name: 'Skibidi Pizza Slice', tier: 'epic', price: 880, icon: '🍕', file: 'skibidi_pizza.png' },
    { id: 'cappuccino_assassino', name: 'Cappuccino Assassino', tier: 'epic', price: 920, icon: '☕', file: 'cappuccino_assassino.png' },
    { id: 'orangutini', name: 'Orangutini Ananassini', tier: 'epic', price: 990, icon: '🦧', file: 'orangutini.jpg' },
    { id: 'grimace', name: 'Grimace Shake Monster', tier: 'epic', price: 1050, icon: '🥤', file: 'grimace.png' },
    { id: 'cappuccina', name: 'Ballerina Cappuccina', tier: 'epic', price: 1150, icon: '🩰', file: 'cappuccina.png' },
    { id: 'freddy', name: 'Freddy Fazbear', tier: 'epic', price: 1250, icon: '🐻', file: 'freddy.png' },
    { id: 'kfc_boss', name: 'KFC Boss Sanders', tier: 'epic', price: 1300, icon: '🍗', file: 'kfc_boss.png' },
    { id: 'lirili', name: 'Lirili Larila', tier: 'epic', price: 1350, icon: '🌵', file: 'lirili.png' },

    // LEGENDARY (1600 - 4600 🪙)
    { id: 'patapim', name: 'Brr Brr Patapim', tier: 'legendary', price: 1750, icon: '🦧', file: 'patapim.png' },
    { id: 'trulimero', name: 'Trulimero Trulicina', tier: 'legendary', price: 1850, icon: '🧙', file: 'trulimero.jpg' },
    { id: 'mona_bean', name: 'Mona Lisa Bean', tier: 'legendary', price: 1900, icon: '🖼️', file: 'mona_bean.jpg' },
    { id: 'cameraman', name: 'Titan Cameraman', tier: 'legendary', price: 2100, icon: '🎥', file: 'cameraman.png' },
    { id: 'sahur', name: 'Tung Tung Tung Sahur', tier: 'legendary', price: 2400, icon: '🪵', file: 'sahur.png' },
    { id: 'hasbulla', name: 'King Hasbulla Magomedov', tier: 'legendary', price: 2800, icon: '🥊', file: 'hasbulla.png' },
    { id: 'tripi_tropi', name: 'Trippi Troppi', tier: 'legendary', price: 3300, icon: '🦐', file: 'tripi_tropi.png' },
    { id: 'sigma_male', name: 'Patrick Bateman Sigma', tier: 'legendary', price: 3600, icon: '💼', file: 'sigma_male.png' },
    { id: 'chill_guy', name: 'Just a Chill Guy', tier: 'legendary', price: 3800, icon: '☕', file: 'chill_guy.PNG' },
    { id: 'los_bros', name: 'Los Pollos Bros', tier: 'legendary', price: 4100, icon: '👔', file: 'los_bros.PNG' },
    { id: 'bombardier', name: 'Bombardiro Crocodilo', tier: 'legendary', price: 4500, icon: '🐊', file: 'bombardier.png' },

    // MYTHIC (6200 - 19500 🪙)
    { id: 'tralalero', name: 'Tralalero Tralala', tier: 'mythic', price: 6500, icon: '🦈', file: 'tralalero.png' },
    { id: 'tralala', name: 'Tralala Nike Shark', tier: 'mythic', price: 6900, icon: '🦈', file: 'tralala.png' },
    { id: 'cosmic', name: 'Cosmic Brainrot Cat', tier: 'mythic', price: 8200, icon: '🌌', file: 'cosmic.png' },
    { id: 'shailushai', name: 'Shailushai Smurf Cat', tier: 'mythic', price: 9500, icon: '🍄', file: 'shailushai.png' },
    { id: 'skibidi', name: 'Skibidi Toilet Titan', tier: 'mythic', price: 11500, icon: '🚽', file: 'skibidi.png' },
    { id: 'trenostruzzo', name: 'Trenostruzzo Turbo 3000', tier: 'mythic', price: 14000, icon: '🚂', file: 'trenostruzzo.png' },
    { id: 'sunshine', name: 'You Are My Sunshine LeBron', tier: 'mythic', price: 16500, icon: '☀️', file: 'sunshine.jpg' },
    { id: 'saturno', name: 'Saturno Saturnita', tier: 'mythic', price: 19500, icon: '🪐', file: 'saturno.png' },

    // GODLIKE (28000 - 65000 🪙)
    { id: 'gigachad', name: 'Mega Sigma GigaChad', tier: 'godlike', price: 28000, icon: '🗿', file: 'gigachad.png' },
    { id: 'baron', name: 'Italian Baron', tier: 'godlike', price: 42000, icon: '👑', file: 'baron.png' },
    { id: 'god_meme', name: 'Absolute God of Brainrot', tier: 'godlike', price: 65000, icon: '💎', file: 'god_meme.png' }
];

const TIER_ORDER = ['common', 'rare', 'epic', 'legendary', 'mythic', 'godlike'];

const TIER_COLORS = {
    common: '#b0c3d9',
    rare: '#4b69ff',
    epic: '#8847ff',
    legendary: '#d32ce6',
    mythic: '#eb4b4b',
    godlike: '#ffd700'
};

const RANKS = [
    { minLevel: 1, name: 'ROOKIE' },
    { minLevel: 3, name: 'SIGMA FIGHTER' },
    { minLevel: 5, name: 'MEME WOLF' },
    { minLevel: 8, name: 'BRAINROT TYCOON' },
    { minLevel: 12, name: 'ITALIAN BARON' },
    { minLevel: 20, name: 'GOD OF BRAINROT' }
];

function getRankName(level) {
    let current = RANKS[0].name;
    for (const r of RANKS) {
        if (level >= r.minLevel) current = r.name;
    }
    return current;
}

// Helper to render transparent PNGs and photos from images/ with smooth emoji fallback
function getMemeAvatarHTML(item, sizeClass = '') {
    const dbItem = MEME_DATABASE.find(m => m.id === item.id);
    const fileName = item.file || (dbItem && dbItem.file) || `${item.id}.png`;
    return `
        <div class="card-avatar ${sizeClass}">
            <span class="avatar-fallback-emoji">${item.icon}</span>
            <img src="images/${fileName}" alt="${item.name}" class="avatar-img" onload="this.previousElementSibling.style.display='none';" onerror="this.style.display='none';">
        </div>
    `;
}

// --- 2. LOCAL PROGRESS STORAGE (LOCALSTORAGE) ---
const SAVE_KEY = 'BRAINROT_UPGRADER_CLOUD_V7';

let state = {
    balance: 1500,
    inventory: [
        { ...(MEME_DATABASE.find(m => m.id === 'chipi') || MEME_DATABASE[0]), uid: 'init_1' },
        { ...(MEME_DATABASE.find(m => m.id === 'banana') || MEME_DATABASE[4]), uid: 'init_2' },
        { ...(MEME_DATABASE.find(m => m.id === 'pedro') || MEME_DATABASE[7]), uid: 'init_3' },
        { ...(MEME_DATABASE.find(m => m.id === 'bananita') || MEME_DATABASE[10]), uid: 'init_4' }
    ],
    stats: {
        level: 1,
        xp: 0,
        totalUpgrades: 0,
        wins: 0,
        losses: 0,
        totalCoinsWon: 0,
        casesOpened: 0,
        contractsDone: 0,
        duelsWon: 0
    },
    soundEnabled: true,
    spinDirection: 'right', // 'right' (CW) | 'left' (CCW)
    isTurbo: false,
    lastDailySpinTime: 0,
    roundHash: '',
    serverSeed: '',
    clientSeed: 'CLIENT_' + Math.floor(Math.random() * 90000 + 10000),
    selectedSources: [],
    selectedTarget: null,
    contractItems: [],
    boostActive: false,
    isSpinning: false,
    lastBurnedItems: []
};

function generateProvablyFairRound() {
    const chars = '0123456789abcdef';
    let sSeed = '';
    let hash = '';
    for (let i = 0; i < 32; i++) sSeed += chars[Math.floor(Math.random() * chars.length)];
    for (let i = 0; i < 40; i++) hash += chars[Math.floor(Math.random() * chars.length)];
    state.serverSeed = sSeed;
    state.roundHash = hash;
    const disp = document.getElementById('round-hash-display');
    if (disp) disp.textContent = hash.substr(0, 10) + '...' + hash.substr(-6);
}

function loadProgress() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (typeof parsed.balance === 'number') state.balance = parsed.balance;
            if (Array.isArray(parsed.inventory)) {
                state.inventory = parsed.inventory.map(item => {
                    const dbItem = MEME_DATABASE.find(m => m.id === item.id);
                    return dbItem ? { ...dbItem, ...item, file: dbItem.file || item.file } : item;
                });
            }
            if (parsed.stats) state.stats = { ...state.stats, ...parsed.stats };
            if (typeof parsed.soundEnabled === 'boolean') state.soundEnabled = parsed.soundEnabled;
            if (parsed.spinDirection) state.spinDirection = parsed.spinDirection;
            if (typeof parsed.isTurbo === 'boolean') state.isTurbo = parsed.isTurbo;
            if (parsed.lastDailySpinTime) state.lastDailySpinTime = parsed.lastDailySpinTime;
        }
    } catch (e) {
        console.error('Save load error', e);
    }
    generateProvablyFairRound();
}

function saveProgress() {
    try {
        const payload = {
            balance: state.balance,
            inventory: state.inventory,
            stats: state.stats,
            soundEnabled: state.soundEnabled,
            spinDirection: state.spinDirection,
            isTurbo: state.isTurbo,
            lastDailySpinTime: state.lastDailySpinTime,
            savedAt: Date.now()
        };
        localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
    } catch (e) {
        console.error('Save write error', e);
    }
}

window.addEventListener('beforeunload', saveProgress);
loadProgress();

function addXP(amount) {
    state.stats.xp += amount;
    let xpNeeded = state.stats.level * 100;

    while (state.stats.xp >= xpNeeded) {
        state.stats.xp -= xpNeeded;
        state.stats.level++;
        xpNeeded = state.stats.level * 100;

        const bonusCoins = state.stats.level * 500;
        state.balance += bonusCoins;
        SoundEngine.play('level_up');
        triggerScreenShake();
        alert(`🎉 LEVEL UP: ${state.stats.level} (${getRankName(state.stats.level)})!\nYou were awarded +${bonusCoins.toLocaleString('en-US')} bonus coins!`);
    }

    saveProgress();
    updateUI();
}

function triggerScreenShake() {
    const arena = document.getElementById('main-arena');
    if (!arena) return;
    arena.classList.remove('screen-shake');
    void arena.offsetWidth; // trigger reflow
    arena.classList.add('screen-shake');
    setTimeout(() => arena.classList.remove('screen-shake'), 450);
}

// --- 3. STUDIO WEB AUDIO SYNTHESIZER ---
const SoundEngine = {
    ctx: null,
    mutedForAd: false,

    init() {
        if (!this.ctx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContextClass();
        }
        if (this.ctx && this.ctx.state === 'suspended' && !this.mutedForAd) {
            this.ctx.resume();
        }
    },

    suspendAudio() {
        this.mutedForAd = true;
        if (this.ctx && this.ctx.state === 'running') {
            this.ctx.suspend().catch(() => {});
        }
    },

    resumeAudio() {
        this.mutedForAd = false;
        if (this.ctx && this.ctx.state === 'suspended' && state.soundEnabled) {
            this.ctx.resume().catch(() => {});
        }
    },

    play(soundName) {
        if (!state.soundEnabled || this.mutedForAd) return;
        this.init();
        if (!this.ctx) return;

        const ctx = this.ctx;
        const now = ctx.currentTime;

        switch (soundName) {
            case 'click': {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, now);
                osc.frequency.exponentialRampToValueAtTime(120, now + 0.03);
                gain.gain.setValueAtTime(0.18, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.03);
                break;
            }

            case 'wheel_tick': {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(450, now);
                osc.frequency.exponentialRampToValueAtTime(90, now + 0.025);
                gain.gain.setValueAtTime(state.isTurbo ? 0.09 : 0.14, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.025);
                break;
            }

            case 'case_tick': {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'square';
                osc.frequency.setValueAtTime(1100, now);
                osc.frequency.exponentialRampToValueAtTime(300, now + 0.02);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.02);
                break;
            }

            case 'win': {
                const freqs = [261.63, 329.63, 392.00, 523.25, 659.25];
                freqs.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    const noteTime = now + (idx * 0.07);
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, noteTime);
                    gain.gain.setValueAtTime(0, noteTime);
                    gain.gain.linearRampToValueAtTime(0.2, noteTime + 0.04);
                    gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.9);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(noteTime);
                    osc.stop(noteTime + 0.9);
                });
                break;
            }

            case 'lose': {
                const osc = ctx.createOscillator();
                const sub = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(180, now);
                osc.frequency.exponentialRampToValueAtTime(45, now + 0.5);
                sub.type = 'sine';
                sub.frequency.setValueAtTime(120, now);
                sub.frequency.exponentialRampToValueAtTime(30, now + 0.5);
                gain.gain.setValueAtTime(0.28, now);
                gain.gain.linearRampToValueAtTime(0.001, now + 0.55);
                osc.connect(gain);
                sub.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                sub.start(now);
                osc.stop(now + 0.55);
                sub.stop(now + 0.55);
                break;
            }

            case 'coin': {
                const pings = [1760, 2637];
                pings.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    const t = now + (idx * 0.08);
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, t);
                    gain.gain.setValueAtTime(0.22, t);
                    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(t);
                    osc.stop(t + 0.4);
                });
                break;
            }

            case 'boost': {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(250, now);
                osc.frequency.exponentialRampToValueAtTime(1400, now + 0.4);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.linearRampToValueAtTime(0.001, now + 0.45);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.45);
                break;
            }

            case 'level_up': {
                const chords = [392, 523.25, 659.25, 783.99, 1046.5];
                chords.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    const t = now + (i * 0.09);
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, t);
                    gain.gain.setValueAtTime(0.25, t);
                    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.7);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(t);
                    osc.stop(t + 0.7);
                });
                break;
            }

            case 'anvil': {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(1200, now);
                osc.frequency.exponentialRampToValueAtTime(300, now + 0.3);
                gain.gain.setValueAtTime(0.3, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.35);
                break;
            }
        }
    }
};

// Sound toggle
const btnSound = document.getElementById('btn-sound-toggle');
const soundIcon = document.getElementById('sound-icon');
btnSound.onclick = () => {
    state.soundEnabled = !state.soundEnabled;
    soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    SoundEngine.play('click');
    saveProgress();
};

// --- 4. DOM ELEMENTS ---
const balanceEl = document.getElementById('player-balance');
const profileInvVal = document.getElementById('profile-inv-val');
const sourceCountBadge = document.getElementById('source-count-badge');
const invCountBadge = document.getElementById('inv-count-badge');
const chosenSourcesZone = document.getElementById('chosen-sources-zone');
const chosenTargetZone = document.getElementById('chosen-target-zone');
const totalSourceValEl = document.getElementById('total-source-val');
const targetValEl = document.getElementById('target-val');

// HUD
const hudLevelBadge = document.getElementById('hud-level-badge');
const hudRankName = document.getElementById('hud-rank-name');
const hudXpText = document.getElementById('hud-xp-text');
const hudXpFill = document.getElementById('hud-xp-fill');
const btnOpenLevel = document.getElementById('btn-open-level');

// Direction and Turbo Toggles
const btnDirRight = document.getElementById('btn-dir-right');
const btnDirLeft = document.getElementById('btn-dir-left');
const btnTurboToggle = document.getElementById('btn-turbo-toggle');
const turboStatusText = document.getElementById('turbo-status-text');

// Arena Center
const chanceDisplay = document.getElementById('chance-display');
const multiplierDisplay = document.getElementById('multiplier-display');
const coreChanceText = document.getElementById('core-chance-text');
const btnUpgrade = document.getElementById('btn-upgrade');
const btnBoostChance = document.getElementById('btn-boost-chance');
const btnClearSources = document.getElementById('btn-clear-sources');
const btnFreeCoins = document.getElementById('btn-free-coins');
const btnSelectAllLow = document.getElementById('btn-select-all-low');
const btnSellFromTab = document.getElementById('btn-sell-from-tab');

// Tabs
const inventoryGrid = document.getElementById('inventory-grid');
const shopGrid = document.getElementById('shop-grid');
const targetCatalogGrid = document.getElementById('target-catalog-grid');

// Contracts
const contractSlotsContainer = document.getElementById('contract-slots-container');
const btnContractAutofill = document.getElementById('btn-contract-autofill');
const btnForgeContract = document.getElementById('btn-forge-contract');

// Profile
const modalProfile = document.getElementById('modal-profile');
const btnOpenProfile = document.getElementById('btn-open-profile');
const btnProfileClose = document.getElementById('btn-profile-close');
const pmhFullRank = document.getElementById('pmh-full-rank');
const pmhCount = document.getElementById('pmh-count');
const pmhTotalVal = document.getElementById('pmh-total-val');
const pmhBalanceVal = document.getElementById('pmh-balance-val');
const pmhTotalUpgrades = document.getElementById('pmh-total-upgrades');
const pmhWinrate = document.getElementById('pmh-winrate');
const btnSellAllInventory = document.getElementById('btn-sell-all-inventory');
const profileItemsGrid = document.getElementById('profile-items-grid');

// Provably Fair
const btnOpenProvably = document.getElementById('btn-open-provably');
const modalProvablyFair = document.getElementById('modal-provably-fair');
const btnPfClose = document.getElementById('btn-pf-close');
const btnPfOk = document.getElementById('btn-pf-ok');
const pfCurrentHash = document.getElementById('pf-current-hash');
const pfServerSeed = document.getElementById('pf-server-seed');
const pfClientSeed = document.getElementById('pf-client-seed');

// Daily Wheel
const btnDailyWheel = document.getElementById('btn-daily-wheel');
const modalDailyWheel = document.getElementById('modal-daily-wheel');
const btnDailyClose = document.getElementById('btn-daily-close');
const btnSpinDailyFree = document.getElementById('btn-spin-daily-free');
const btnSpinDailyAd = document.getElementById('btn-spin-daily-ad');
const dailyCanvas = document.getElementById('daily-canvas');
const dailyCtx = dailyCanvas ? dailyCanvas.getContext('2d') : null;

// Chat
const btnToggleChat = document.getElementById('btn-toggle-chat');
const liveChatPanel = document.getElementById('live-chat-panel');
const btnChatClose = document.getElementById('btn-chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatInputText = document.getElementById('chat-input-text');
const btnChatSend = document.getElementById('btn-chat-send');

// Duel
const modalDuel = document.getElementById('modal-duel');
const btnDuelClose = document.getElementById('btn-duel-close');
const duelPlayerItem = document.getElementById('duel-player-item');
const duelBotItem = document.getElementById('duel-bot-item');
const duelBotName = document.getElementById('duel-bot-name');
const btnStartDuelRoll = document.getElementById('btn-start-duel-roll');
const duelCanvas = document.getElementById('duel-canvas');
const duelCtx = duelCanvas ? duelCanvas.getContext('2d') : null;

// Modals
const modalAd = document.getElementById('modal-ad');
const adCountdown = document.getElementById('ad-countdown');
const adProgress = document.getElementById('ad-progress');
const modalRescue = document.getElementById('modal-rescue');
const rescueBurnCost = document.getElementById('rescue-burn-cost');
const btnRescueAd = document.getElementById('btn-rescue-ad');
const btnRescueDecline = document.getElementById('btn-rescue-decline');

const modalWin = document.getElementById('modal-win');
const winCardTarget = document.getElementById('win-card-target');
const btnWinDouble = document.getElementById('btn-win-double');
const btnWinClaim = document.getElementById('btn-win-claim');

// Case Roulette
const modalCaseRoulette = document.getElementById('modal-case-roulette');
const crCaseName = document.getElementById('cr-case-name');
const rouletteTape = document.getElementById('roulette-tape');
const caseResultZone = document.getElementById('case-result-zone');
const caseWinCard = document.getElementById('case-win-card');
const btnClaimCaseDrop = document.getElementById('btn-claim-case-drop');
const btnCrClose = document.getElementById('btn-cr-close');

// Wheel Canvas
const canvas = document.getElementById('wheel-canvas');
const ctx = canvas.getContext('2d');
let currentNeedleAngle = 0;

// --- 5. DIRECTION AND TURBO CONTROLS ---
btnDirRight.onclick = () => {
    state.spinDirection = 'right';
    btnDirRight.classList.add('active');
    btnDirLeft.classList.remove('active');
    SoundEngine.play('click');
    saveProgress();
    drawWheel(currentNeedleAngle);
};

btnDirLeft.onclick = () => {
    state.spinDirection = 'left';
    btnDirLeft.classList.add('active');
    btnDirRight.classList.remove('active');
    SoundEngine.play('click');
    saveProgress();
    drawWheel(currentNeedleAngle);
};

btnTurboToggle.onclick = () => {
    state.isTurbo = !state.isTurbo;
    turboStatusText.textContent = state.isTurbo ? 'ON' : 'OFF';
    btnTurboToggle.classList.toggle('active', state.isTurbo);
    SoundEngine.play('boost');
    saveProgress();
};

if (state.spinDirection === 'left') {
    btnDirLeft.classList.add('active');
    btnDirRight.classList.remove('active');
}
if (state.isTurbo) {
    turboStatusText.textContent = 'ON';
    btnTurboToggle.classList.add('active');
}

// --- 6. PROVABLY FAIR ---
btnOpenProvably.onclick = () => {
    pfCurrentHash.value = state.roundHash;
    pfServerSeed.value = state.serverSeed;
    pfClientSeed.value = state.clientSeed;
    modalProvablyFair.classList.add('active');
    SoundEngine.play('click');
};
btnPfClose.onclick = () => modalProvablyFair.classList.remove('active');
btnPfOk.onclick = () => modalProvablyFair.classList.remove('active');

// --- 7. CHANCE AND WAGER CALCULATIONS ---
function getTotalSourceValue() {
    return state.selectedSources.reduce((sum, item) => sum + item.price, 0);
}

function getTotalInventoryValue() {
    return state.inventory.reduce((sum, item) => sum + item.price, 0);
}

function getWinChance() {
    const totalSource = getTotalSourceValue();
    if (totalSource <= 0 || !state.selectedTarget) return 0;

    let base = (totalSource / state.selectedTarget.price) * 100;
    if (state.boostActive) base += 15;
    return Math.min(Math.max(base, 0.5), 95);
}

function selectPresetOdd(type, val) {
    SoundEngine.play('click');

    if (state.selectedSources.length === 0) {
        if (state.inventory.length === 0) {
            alert('First add a brainrot to your inventory!');
            return;
        }
        state.selectedSources = [state.inventory[0]];
    }

    const currentInputVal = getTotalSourceValue();
    let desiredTargetPrice = 0;

    if (type === 'mult') {
        desiredTargetPrice = currentInputVal * val;
    } else if (type === 'chance') {
        desiredTargetPrice = currentInputVal / (val / 100);
    }

    let bestMeme = null;
    let minDiff = Infinity;

    MEME_DATABASE.forEach(m => {
        if (m.price <= currentInputVal * 0.9) return;
        const diff = Math.abs(m.price - desiredTargetPrice);
        if (diff < minDiff) {
            minDiff = diff;
            bestMeme = m;
        }
    });

    if (!bestMeme) bestMeme = MEME_DATABASE[MEME_DATABASE.length - 1];

    state.selectedTarget = bestMeme;
    SoundEngine.play('coin');

    document.querySelectorAll('.btn-quick-odd').forEach(b => b.classList.remove('active'));
    const clickedBtn = document.querySelector(`.btn-quick-odd[data-type="${type}"][data-val="${val}"]`);
    if (clickedBtn) clickedBtn.classList.add('active');

    updateUI();
}

document.querySelectorAll('.btn-quick-odd').forEach(btn => {
    btn.onclick = () => {
        if (state.isSpinning) return;
        selectPresetOdd(btn.dataset.type, parseFloat(btn.dataset.val));
    };
});

// --- 8. WHEEL RENDERING (CANVAS) ---
function drawWheel(angle = 0) {
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const outerR = w / 2 - 8;
    const trackR = outerR - 12;
    const innerR = 64; // Boundary of center core

    ctx.clearRect(0, 0, w, h);

    // 1. Titanium Chassis Background & Bezel
    const bgGrad = ctx.createRadialGradient(cx, cy, innerR, cx, cy, outerR);
    bgGrad.addColorStop(0, '#0c1018');
    bgGrad.addColorStop(0.7, '#07090f');
    bgGrad.addColorStop(1, '#141a27');

    ctx.beginPath();
    ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
    ctx.fillStyle = bgGrad;
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#222c3e';
    ctx.stroke();

    // 2. High-Precision Tactical Graduation Ticks around perimeter (72 ticks)
    const tickCount = 72;
    for (let i = 0; i < tickCount; i++) {
        const tickAngle = (i / tickCount) * (Math.PI * 2);
        const isMajor = (i % 6 === 0);
        const tickLength = isMajor ? 8 : 4;
        const r1 = outerR - 2;
        const r2 = r1 - tickLength;

        const x1 = cx + Math.cos(tickAngle) * r1;
        const y1 = cy + Math.sin(tickAngle) * r1;
        const x2 = cx + Math.cos(tickAngle) * r2;
        const y2 = cy + Math.sin(tickAngle) * r2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = isMajor ? 2 : 1;
        ctx.strokeStyle = isMajor ? 'rgba(0, 240, 255, 0.65)' : 'rgba(255, 255, 255, 0.15)';
        ctx.stroke();

        if (isMajor) {
            const dotR = r2 - 4;
            const dx = cx + Math.cos(tickAngle) * dotR;
            const dy = cy + Math.sin(tickAngle) * dotR;
            ctx.beginPath();
            ctx.arc(dx, dy, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 240, 255, 0.7)';
            ctx.fill();
        }
    }

    // 3. Recessed Track Groove
    ctx.beginPath();
    ctx.arc(cx, cy, trackR, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // 4. Win Sector Arc
    const chance = getWinChance();
    const winAngle = (chance / 100) * (Math.PI * 2);

    if (winAngle > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy);

        const startAngle = -Math.PI / 2;
        const endAngle = state.spinDirection === 'right' 
            ? startAngle + winAngle 
            : startAngle - winAngle;

        if (state.spinDirection === 'right') {
            ctx.arc(cx, cy, trackR, startAngle, endAngle, false);
        } else {
            ctx.arc(cx, cy, trackR, startAngle, endAngle, true);
        }
        ctx.closePath();

        // Radiant esports gradient
        const grad = ctx.createRadialGradient(cx, cy, innerR, cx, cy, trackR);
        if (state.boostActive) {
            grad.addColorStop(0, 'rgba(255, 184, 0, 0.85)');
            grad.addColorStop(0.7, '#ffb800');
            grad.addColorStop(1, '#ff6b00');
        } else {
            grad.addColorStop(0, 'rgba(0, 255, 136, 0.85)');
            grad.addColorStop(0.65, '#00ff88');
            grad.addColorStop(1, '#00b4d8');
        }

        ctx.fillStyle = grad;
        ctx.shadowColor = state.boostActive ? 'rgba(255, 184, 0, 0.6)' : 'rgba(0, 255, 136, 0.6)';
        ctx.shadowBlur = 18;
        ctx.fill();

        // Outer neon rim stroke on win sector
        ctx.beginPath();
        if (state.spinDirection === 'right') {
            ctx.arc(cx, cy, trackR, startAngle, endAngle, false);
        } else {
            ctx.arc(cx, cy, trackR, startAngle, endAngle, true);
        }
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = state.boostActive ? '#ffe57f' : '#69ffc3';
        ctx.stroke();

        // Exact cut-off boundary line (white-hot threshold line)
        const edgeX = cx + Math.cos(endAngle) * trackR;
        const edgeY = cy + Math.sin(endAngle) * trackR;
        const edgeInnerX = cx + Math.cos(endAngle) * innerR;
        const edgeInnerY = cy + Math.sin(endAngle) * innerR;

        ctx.beginPath();
        ctx.moveTo(edgeInnerX, edgeInnerY);
        ctx.lineTo(edgeX, edgeY);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ffffff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.stroke();

        ctx.restore();
    }

    // 5. High-Tech Laser Pointer Needle
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);

    const needleColor = '#ff2a6d';
    const needleLen = trackR - 2;

    // Glowing needle shaft
    ctx.beginPath();
    ctx.moveTo(-3, 0);
    ctx.lineTo(3, 0);
    ctx.lineTo(1.5, -needleLen + 14);
    ctx.lineTo(0, -needleLen);
    ctx.lineTo(-1.5, -needleLen + 14);
    ctx.closePath();

    ctx.fillStyle = needleColor;
    ctx.shadowColor = needleColor;
    ctx.shadowBlur = 18;
    ctx.fill();

    // Sharp white core inside needle
    ctx.beginPath();
    ctx.moveTo(0, -needleLen);
    ctx.lineTo(0, -innerR);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 6;
    ctx.stroke();

    // Pointer beacon arrowhead at perimeter
    ctx.beginPath();
    ctx.moveTo(0, -needleLen - 3);
    ctx.lineTo(5, -needleLen + 12);
    ctx.lineTo(-5, -needleLen + 12);
    ctx.closePath();
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = needleColor;
    ctx.shadowBlur = 15;
    ctx.fill();

    // Tip illuminated beacon dot
    ctx.beginPath();
    ctx.arc(0, -needleLen, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    ctx.restore();

    // 6. Center Ring Bevel (just underneath HTML core)
    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#1b2230';
    ctx.stroke();
}

// --- 9. UI UPDATES ---
function updateUI() {
    balanceEl.textContent = state.balance.toLocaleString('en-US');
    profileInvVal.textContent = `🪙 ${getTotalInventoryValue().toLocaleString('en-US')}`;
    invCountBadge.textContent = state.inventory.length;
    sourceCountBadge.textContent = `${state.selectedSources.length} / 6`;

    // Level HUD
    const xpNeeded = state.stats.level * 100;
    hudLevelBadge.textContent = `LVL ${state.stats.level}`;
    hudRankName.textContent = getRankName(state.stats.level);
    hudXpText.textContent = `${state.stats.xp} / ${xpNeeded} XP`;
    const pct = Math.min((state.stats.xp / xpNeeded) * 100, 100);
    hudXpFill.style.width = `${pct}%`;

    const totalSource = getTotalSourceValue();
    totalSourceValEl.textContent = `🪙 ${totalSource.toLocaleString('en-US')}`;

    if (state.selectedTarget) {
        targetValEl.textContent = `🪙 ${state.selectedTarget.price.toLocaleString('en-US')}`;
    } else {
        targetValEl.textContent = `🪙 0`;
    }

    const chance = getWinChance();
    if (chance > 0) {
        chanceDisplay.textContent = `${chance.toFixed(2)}%`;
        coreChanceText.textContent = `${Math.round(chance)}%`;
        const mult = (state.selectedTarget.price / totalSource).toFixed(2);
        multiplierDisplay.textContent = `x${mult}`;
        btnUpgrade.disabled = state.isSpinning;
        btnBoostChance.disabled = state.isSpinning || state.boostActive;
        btnBoostChance.textContent = state.boostActive ? '🍀 +15% BOOST ACTIVE' : '🍀 +15% CHANCE BOOST (AD)';
    } else {
        chanceDisplay.textContent = '0.00%';
        coreChanceText.textContent = '0%';
        multiplierDisplay.textContent = 'x0.00';
        btnUpgrade.disabled = true;
        btnBoostChance.disabled = true;
    }

    renderChosenSources();
    renderChosenTarget();
    renderInventory();
    renderShop();
    renderTargetCatalog();
    renderContractSlots();
    drawWheel(currentNeedleAngle);
}

function renderChosenSources() {
    if (state.selectedSources.length === 0) {
        chosenSourcesZone.className = 'chosen-items-zone';
        chosenSourcesZone.innerHTML = `
            <div class="zone-empty-state">
                <span class="empty-icon">➕</span>
                <p>Click brainrots in inventory below</p>
                <span class="sub-hint">Stack up to 6 items for maximum win odds!</span>
            </div>`;
        return;
    }

    chosenSourcesZone.className = 'chosen-items-zone filled';
    chosenSourcesZone.innerHTML = '';

    state.selectedSources.forEach(item => {
        const chip = document.createElement('div');
        chip.className = 'mini-chip-card';
        chip.style.setProperty('--tier-color', TIER_COLORS[item.tier]);
        chip.innerHTML = `
            <div class="chip-left">
                ${getMemeAvatarHTML(item, 'avatar-chip')}
                <div class="chip-info">
                    <div class="chip-name">${item.name}</div>
                    <div class="chip-price">🪙 ${item.price.toLocaleString('en-US')}</div>
                </div>
            </div>
            <button class="chip-remove" title="Remove">✕</button>
        `;

        chip.querySelector('.chip-remove').onclick = (e) => {
            e.stopPropagation();
            if (state.isSpinning) return;
            removeSourceItem(item.uid);
        };

        chosenSourcesZone.appendChild(chip);
    });
}

function removeSourceItem(uid) {
    state.selectedSources = state.selectedSources.filter(i => i.uid !== uid);
    SoundEngine.play('wheel_tick');
    updateUI();
}

btnClearSources.onclick = () => {
    if (state.isSpinning) return;
    state.selectedSources = [];
    SoundEngine.play('click');
    updateUI();
};

btnSelectAllLow.onclick = () => {
    if (state.isSpinning) return;
    const sorted = [...state.inventory].sort((a, b) => a.price - b.price);
    state.selectedSources = sorted.slice(0, 6);
    SoundEngine.play('coin');
    updateUI();
};

function renderChosenTarget() {
    if (!state.selectedTarget) {
        chosenTargetZone.className = 'chosen-target-zone';
        chosenTargetZone.innerHTML = `
            <div class="zone-empty-state">
                <span class="empty-icon">🎯</span>
                <p>Select target from catalog below</p>
                <span class="sub-hint">Or use 2X, 50% quick buttons below!</span>
            </div>`;
        return;
    }

    chosenTargetZone.className = 'chosen-target-zone filled';
    chosenTargetZone.innerHTML = `
        <div class="meme-card selected-target" style="--tier-color: ${TIER_COLORS[state.selectedTarget.tier]}">
            <span class="card-tag">${state.selectedTarget.tier.toUpperCase()}</span>
            ${getMemeAvatarHTML(state.selectedTarget)}
            <div class="card-title">${state.selectedTarget.name}</div>
            <div class="card-price-row">🪙 ${state.selectedTarget.price.toLocaleString('en-US')}</div>
        </div>
    `;
}

function renderInventory() {
    inventoryGrid.innerHTML = '';
    if (state.inventory.length === 0) {
        inventoryGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-gray); padding: 40px;">
                Your inventory is empty! Buy in the shop, open a case or get +2,000 coins 🎬
            </div>`;
        return;
    }

    state.inventory.forEach(item => {
        const card = document.createElement('div');
        const isSelected = state.selectedSources.some(s => s.uid === item.uid);
        card.className = `meme-card ${isSelected ? 'selected-source' : ''}`;
        card.style.setProperty('--tier-color', TIER_COLORS[item.tier]);

        card.innerHTML = `
            <span class="card-tag">${item.tier.toUpperCase()}</span>
            <span class="card-check">✓</span>
            ${getMemeAvatarHTML(item)}
            <div class="card-title">${item.name}</div>
            <div class="card-price-row">🪙 ${item.price.toLocaleString('en-US')}</div>
        `;

        card.onclick = () => {
            if (state.isSpinning) return;

            if (isSelected) {
                removeSourceItem(item.uid);
            } else {
                if (state.selectedSources.length >= 6) {
                    alert('You can stack up to 6 brainrots maximum!');
                    return;
                }
                state.selectedSources.push(item);
                SoundEngine.play('wheel_tick');
                updateUI();
            }
        };

        inventoryGrid.appendChild(card);
    });
}

function renderShop() {
    shopGrid.innerHTML = '';
    MEME_DATABASE.forEach(item => {
        const card = document.createElement('div');
        card.className = 'meme-card';
        card.style.setProperty('--tier-color', TIER_COLORS[item.tier]);

        card.innerHTML = `
            <span class="card-tag">${item.tier.toUpperCase()}</span>
            ${getMemeAvatarHTML(item)}
            <div class="card-title">${item.name}</div>
            <div class="card-price-row">🪙 ${item.price.toLocaleString('en-US')}</div>
            <button class="btn-buy-meme">BUY FOR 🪙 ${item.price.toLocaleString('en-US')}</button>
        `;

        card.querySelector('.btn-buy-meme').onclick = (e) => {
            e.stopPropagation();
            buyMeme(item);
        };

        shopGrid.appendChild(card);
    });
}

function buyMeme(item) {
    if (state.balance < item.price) {
        if (confirm(`Not enough coins for "${item.name}"! Watch a short ad for +2,000 coins?`)) {
            simulateYandexAd(() => {
                state.balance += 2000;
            });
        }
        return;
    }

    state.balance -= item.price;
    const newItem = { ...item, uid: 'buy_' + Date.now() + Math.random().toString(36).substr(2, 5) };
    state.inventory.push(newItem);
    SoundEngine.play('coin');
    saveProgress();
    updateUI();
}

function renderTargetCatalog() {
    targetCatalogGrid.innerHTML = '';
    MEME_DATABASE.forEach(item => {
        const card = document.createElement('div');
        const isSelected = state.selectedTarget && state.selectedTarget.id === item.id;
        card.className = `meme-card ${isSelected ? 'selected-target' : ''}`;
        card.style.setProperty('--tier-color', TIER_COLORS[item.tier]);

        card.innerHTML = `
            <span class="card-tag">${item.tier.toUpperCase()}</span>
            ${getMemeAvatarHTML(item)}
            <div class="card-title">${item.name}</div>
            <div class="card-price-row">🪙 ${item.price.toLocaleString('en-US')}</div>
            <button class="btn-target-select">${isSelected ? 'TARGET SELECTED' : 'SELECT TARGET'}</button>
        `;

        card.onclick = () => {
            if (state.isSpinning) return;
            state.selectedTarget = item;
            SoundEngine.play('wheel_tick');
            updateUI();
        };

        targetCatalogGrid.appendChild(card);
    });
}

// --- 10. TRADE-UP CONTRACTS (CS2 STYLE CRAFTING) ---
function renderContractSlots() {
    if (!contractSlotsContainer) return;
    contractSlotsContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const slot = document.createElement('div');
        const item = state.contractItems[i];

        if (item) {
            slot.className = 'contract-slot filled';
            slot.style.setProperty('--tier-color', TIER_COLORS[item.tier]);
            slot.innerHTML = `
                ${getMemeAvatarHTML(item, 'avatar-slot')}
                <div style="font-size:10px; font-weight:700; text-align:center; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:100%;">${item.name}</div>
                <div style="font-size:10px; color:var(--brand-gold);">🪙 ${item.price.toLocaleString('en-US')}</div>
            `;
            slot.onclick = () => {
                state.contractItems.splice(i, 1);
                SoundEngine.play('click');
                updateUI();
            };
        } else {
            slot.className = 'contract-slot';
            slot.innerHTML = `<span class="contract-slot-num">${i + 1}</span>`;
        }

        contractSlotsContainer.appendChild(slot);
    }

    btnForgeContract.disabled = state.contractItems.length < 5;
}

btnContractAutofill.onclick = () => {
    const sorted = [...state.inventory].sort((a, b) => a.price - b.price);
    state.contractItems = sorted.slice(0, 5);
    SoundEngine.play('coin');
    updateUI();
};

btnForgeContract.onclick = () => {
    if (state.contractItems.length < 5) return;

    // Burn 5 items
    const uids = state.contractItems.map(c => c.uid);
    state.inventory = state.inventory.filter(i => !uids.includes(i.uid));

    // Find highest tier among loaded items
    let highestTierIndex = 0;
    state.contractItems.forEach(item => {
        const idx = TIER_ORDER.indexOf(item.tier);
        if (idx > highestTierIndex) highestTierIndex = idx;
    });

    // Next tier!
    const targetTierIndex = Math.min(highestTierIndex + 1, TIER_ORDER.length - 1);
    const targetTier = TIER_ORDER[targetTierIndex];

    const possibleDrops = MEME_DATABASE.filter(m => m.tier === targetTier);
    const wonItem = possibleDrops.length > 0
        ? possibleDrops[Math.floor(Math.random() * possibleDrops.length)]
        : MEME_DATABASE[MEME_DATABASE.length - 1];

    const newItem = { ...wonItem, uid: 'forge_' + Date.now() };
    state.inventory.push(newItem);
    state.contractItems = [];
    state.stats.contractsDone++;
    addXP(60);

    SoundEngine.play('anvil');
    triggerScreenShake();
    saveProgress();
    updateUI();

    alert(`🔥 CONTRACT SIGNED!\nYou successfully crafted: ${newItem.name} (${newItem.tier.toUpperCase()})!`);
};

// --- 11. MEME DUELS AGAINST BOTS (UPGRADE BATTLES) ---
let currentDuel = null;

window.startBotDuel = function(botType) {
    if (state.inventory.length === 0) {
        alert('You need at least 1 brainrot in your inventory to wager in a duel!');
        return;
    }

    // Player wagers their first brainrot
    const playerMeme = state.inventory[0];
    let botMeme;
    let botLabel = 'BOT';

    if (botType === 'skibidi') {
        botMeme = MEME_DATABASE.find(m => m.id === 'chimpanzini') || MEME_DATABASE[7];
        botLabel = 'BOT CHIMPANZINI';
    } else if (botType === 'sigma') {
        botMeme = MEME_DATABASE.find(m => m.id === 'tripi_tropi') || MEME_DATABASE[15];
        botLabel = 'BOT TRIPPI TROPPI';
    } else {
        botMeme = MEME_DATABASE.find(m => m.id === 'tralalero') || MEME_DATABASE[17];
        botLabel = 'BOT TRALALERO';
    }

    currentDuel = { playerMeme, botMeme, botLabel };
    duelBotName.textContent = botLabel;

    duelPlayerItem.innerHTML = `
        ${getMemeAvatarHTML(playerMeme, 'avatar-profile')}
        <div style="font-size:11px;font-weight:700;margin-top:4px;">${playerMeme.name}</div>
        <div style="font-size:11px;color:var(--brand-gold);">🪙 ${playerMeme.price.toLocaleString('en-US')}</div>
    `;

    duelBotItem.innerHTML = `
        ${getMemeAvatarHTML(botMeme, 'avatar-profile')}
        <div style="font-size:11px;font-weight:700;margin-top:4px;">${botMeme.name}</div>
        <div style="font-size:11px;color:var(--brand-gold);">🪙 ${botMeme.price.toLocaleString('en-US')}</div>
    `;

    drawDuelWheel(0);
    modalDuel.classList.add('active');
    SoundEngine.play('click');
};

btnDuelClose.onclick = () => modalDuel.classList.remove('active');

function drawDuelWheel(angle) {
    if (!duelCtx) return;
    const w = duelCanvas.width;
    const h = duelCanvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = w / 2 - 12;

    duelCtx.clearRect(0, 0, w, h);
    if (!currentDuel) return;

    // 1. Titanium Chassis
    duelCtx.beginPath();
    duelCtx.arc(cx, cy, r + 4, 0, Math.PI * 2);
    duelCtx.fillStyle = '#0b0e16';
    duelCtx.fill();
    duelCtx.lineWidth = 2.5;
    duelCtx.strokeStyle = '#222b3d';
    duelCtx.stroke();

    // 2. Tactical ticks
    for (let i = 0; i < 48; i++) {
        const tAngle = (i / 48) * (Math.PI * 2);
        const isMaj = (i % 6 === 0);
        const tLen = isMaj ? 6 : 3;
        const x1 = cx + Math.cos(tAngle) * (r + 2);
        const y1 = cy + Math.sin(tAngle) * (r + 2);
        const x2 = cx + Math.cos(tAngle) * (r + 2 - tLen);
        const y2 = cy + Math.sin(tAngle) * (r + 2 - tLen);
        duelCtx.beginPath();
        duelCtx.moveTo(x1, y1);
        duelCtx.lineTo(x2, y2);
        duelCtx.lineWidth = isMaj ? 1.5 : 1;
        duelCtx.strokeStyle = isMaj ? 'rgba(0, 240, 255, 0.6)' : 'rgba(255, 255, 255, 0.15)';
        duelCtx.stroke();
    }

    const total = currentDuel.playerMeme.price + currentDuel.botMeme.price;
    const playerShare = currentDuel.playerMeme.price / total;
    const playerAngle = playerShare * (Math.PI * 2);

    // Player sector (emerald neon)
    duelCtx.save();
    duelCtx.beginPath();
    duelCtx.moveTo(cx, cy);
    duelCtx.arc(cx, cy, r - 2, angle, angle + playerAngle);
    duelCtx.closePath();
    const pGrad = duelCtx.createLinearGradient(0, 0, w, h);
    pGrad.addColorStop(0, '#00ff88');
    pGrad.addColorStop(1, '#059669');
    duelCtx.fillStyle = pGrad;
    duelCtx.shadowColor = 'rgba(0, 255, 136, 0.4)';
    duelCtx.shadowBlur = 10;
    duelCtx.fill();
    duelCtx.lineWidth = 2;
    duelCtx.strokeStyle = '#69ffc3';
    duelCtx.stroke();
    duelCtx.restore();

    // Bot sector (crimson neon)
    duelCtx.save();
    duelCtx.beginPath();
    duelCtx.moveTo(cx, cy);
    duelCtx.arc(cx, cy, r - 2, angle + playerAngle, angle + Math.PI * 2);
    duelCtx.closePath();
    const bGrad = duelCtx.createLinearGradient(0, 0, w, h);
    bGrad.addColorStop(0, '#ff2a6d');
    bGrad.addColorStop(1, '#9f1239');
    duelCtx.fillStyle = bGrad;
    duelCtx.shadowColor = 'rgba(255, 42, 109, 0.4)';
    duelCtx.shadowBlur = 10;
    duelCtx.fill();
    duelCtx.lineWidth = 2;
    duelCtx.strokeStyle = '#ff6b98';
    duelCtx.stroke();
    duelCtx.restore();

    // Center metallic hub
    duelCtx.beginPath();
    duelCtx.arc(cx, cy, 26, 0, Math.PI * 2);
    duelCtx.fillStyle = '#07090e';
    duelCtx.fill();
    duelCtx.lineWidth = 2.5;
    duelCtx.strokeStyle = '#323f54';
    duelCtx.stroke();

    duelCtx.beginPath();
    duelCtx.arc(cx, cy, 10, 0, Math.PI * 2);
    duelCtx.fillStyle = '#161c28';
    duelCtx.fill();
}

btnStartDuelRoll.onclick = () => {
    if (!currentDuel) return;
    btnStartDuelRoll.disabled = true;

    // Deduct wagered item from player
    state.inventory = state.inventory.filter(i => i.uid !== currentDuel.playerMeme.uid);

    let start = performance.now();
    let duration = 3800;
    let totalRoll = (4 + Math.random() * 2) * Math.PI * 2 + Math.random() * Math.PI * 2;

    function rollFrame(now) {
        let elapsed = now - start;
        let progress = Math.min(elapsed / duration, 1);
        let ease = 1 - Math.pow(1 - progress, 3);
        let curAngle = totalRoll * ease;

        drawDuelWheel(curAngle);
        SoundEngine.play('wheel_tick');

        if (progress < 1) {
            requestAnimationFrame(rollFrame);
        } else {
            finishDuel(curAngle);
        }
    }
    requestAnimationFrame(rollFrame);
};

function finishDuel(finalAngle) {
    btnStartDuelRoll.disabled = false;
    modalDuel.classList.remove('active');

    const total = currentDuel.playerMeme.price + currentDuel.botMeme.price;
    const playerShare = currentDuel.playerMeme.price / total;
    const playerAngle = playerShare * (Math.PI * 2);

    const norm = (finalAngle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    // Bottom marker (PI/2)
    const markerAngle = Math.PI / 2;
    const relAngle = ((markerAngle - norm) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);

    const playerWon = relAngle <= playerAngle;

    if (playerWon) {
        SoundEngine.play('win');
        triggerScreenShake();
        state.inventory.push(currentDuel.playerMeme);
        state.inventory.push({ ...currentDuel.botMeme, uid: 'duel_won_' + Date.now() });
        state.stats.duelsWon++;
        addXP(75);
        alert(`🏆 DUEL VICTORY!\nYou defeated ${currentDuel.botLabel} and claimed both brainrots!`);
    } else {
        SoundEngine.play('lose');
        addXP(20);
        alert(`💀 DUEL DEFEAT!\n${currentDuel.botLabel} took your brainrot!`);
    }

    saveProgress();
    updateUI();
}

// --- 12. DAILY WHEEL OF FORTUNE ---
const DAILY_PRIZES = [
    { text: '500 🪙', type: 'coins', val: 500, color: '#f59e0b' },
    { text: 'Chipi 🐹', type: 'meme', val: MEME_DATABASE.find(m => m.id === 'chipi') || MEME_DATABASE[0], color: '#3b82f6' },
    { text: '1,000 🪙', type: 'coins', val: 1000, color: '#10b981' },
    { text: 'Boost 🍀', type: 'boost', val: 20, color: '#a855f7' },
    { text: '2,500 🪙', type: 'coins', val: 2500, color: '#06b6d4' },
    { text: 'Trippi Troppi 🦐', type: 'meme', val: MEME_DATABASE.find(m => m.id === 'tripi_tropi') || MEME_DATABASE[15], color: '#ec4899' },
    { text: '5,000 🪙', type: 'coins', val: 5000, color: '#ef4444' },
    { text: 'TRALALERO 🦈', type: 'meme', val: MEME_DATABASE.find(m => m.id === 'tralalero') || MEME_DATABASE[17], color: '#ffd700' }
];

let dailyWheelAngle = 0;
let isDailySpinning = false;

btnDailyWheel.onclick = () => {
    modalDailyWheel.classList.add('active');
    drawDailyWheel(dailyWheelAngle);
    checkDailyWheelAvailability();
    SoundEngine.play('click');
};
btnDailyClose.onclick = () => modalDailyWheel.classList.remove('active');

function checkDailyWheelAvailability() {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    if (now - state.lastDailySpinTime < oneDay) {
        btnSpinDailyFree.style.display = 'none';
        btnSpinDailyAd.style.display = 'block';
    } else {
        btnSpinDailyFree.style.display = 'block';
        btnSpinDailyAd.style.display = 'none';
    }
}

function drawDailyWheel(rot = 0) {
    if (!dailyCtx) return;
    const w = dailyCanvas.width;
    const h = dailyCanvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = w / 2 - 10;
    const slices = DAILY_PRIZES.length;
    const arc = (Math.PI * 2) / slices;

    dailyCtx.clearRect(0, 0, w, h);

    // Outer Gold Ring Bezel
    dailyCtx.beginPath();
    dailyCtx.arc(cx, cy, r + 6, 0, Math.PI * 2);
    dailyCtx.fillStyle = '#0f131a';
    dailyCtx.fill();
    dailyCtx.lineWidth = 4;
    dailyCtx.strokeStyle = '#ffd700';
    dailyCtx.stroke();

    // Rivets on Gold Rim
    for (let i = 0; i < slices * 2; i++) {
        const rivetAngle = (i / (slices * 2)) * (Math.PI * 2);
        const rx = cx + Math.cos(rivetAngle) * (r + 4);
        const ry = cy + Math.sin(rivetAngle) * (r + 4);
        dailyCtx.beginPath();
        dailyCtx.arc(rx, ry, 2, 0, Math.PI * 2);
        dailyCtx.fillStyle = '#ffd700';
        dailyCtx.fill();
    }

    DAILY_PRIZES.forEach((prize, idx) => {
        const start = rot + idx * arc;
        const end = start + arc;

        dailyCtx.beginPath();
        dailyCtx.moveTo(cx, cy);
        dailyCtx.arc(cx, cy, r, start, end);
        dailyCtx.fillStyle = prize.color;
        dailyCtx.fill();
        dailyCtx.lineWidth = 2;
        dailyCtx.strokeStyle = '#121620';
        dailyCtx.stroke();

        dailyCtx.save();
        dailyCtx.translate(cx, cy);
        dailyCtx.rotate(start + arc / 2);
        dailyCtx.textAlign = 'right';
        dailyCtx.fillStyle = '#000000';
        dailyCtx.font = 'bold 12px "Chakra Petch", sans-serif';
        dailyCtx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        dailyCtx.shadowBlur = 4;
        dailyCtx.fillText(prize.text, r - 22, 4);
        dailyCtx.restore();
    });

    // Center Gold Star Hub
    dailyCtx.beginPath();
    dailyCtx.arc(cx, cy, 22, 0, Math.PI * 2);
    dailyCtx.fillStyle = '#ffd700';
    dailyCtx.fill();
    dailyCtx.lineWidth = 3;
    dailyCtx.strokeStyle = '#000';
    dailyCtx.stroke();

    dailyCtx.beginPath();
    dailyCtx.arc(cx, cy, 10, 0, Math.PI * 2);
    dailyCtx.fillStyle = '#11141c';
    dailyCtx.fill();
}

function spinDailyWheel(isAd = false) {
    if (isDailySpinning) return;
    isDailySpinning = true;

    if (!isAd) state.lastDailySpinTime = Date.now();

    const turns = (5 + Math.random() * 3) * Math.PI * 2;
    const randOffset = Math.random() * Math.PI * 2;
    const target = dailyWheelAngle + turns + randOffset;
    const start = performance.now();
    const duration = 4000;

    function anim(now) {
        const elapsed = now - start;
        const prog = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - prog, 3);
        dailyWheelAngle = target * ease;

        drawDailyWheel(dailyWheelAngle);
        SoundEngine.play('wheel_tick');

        if (prog < 1) {
            requestAnimationFrame(anim);
        } else {
            finishDailySpin(dailyWheelAngle);
        }
    }
    requestAnimationFrame(anim);
}

function finishDailySpin(angle) {
    isDailySpinning = false;
    SoundEngine.play('win');
    triggerScreenShake();

    const slices = DAILY_PRIZES.length;
    const arc = (Math.PI * 2) / slices;
    // Top marker (-PI/2)
    const norm = (angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    const marker = -Math.PI / 2;
    const rel = ((marker - norm) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    const prizeIndex = Math.floor(rel / arc);
    const won = DAILY_PRIZES[prizeIndex];

    if (won.type === 'coins') {
        state.balance += won.val;
        alert(`🎁 DAILY WHEEL:\nYou won +${won.val.toLocaleString('en-US')} COINS!`);
    } else if (won.type === 'boost') {
        state.boostActive = true;
        alert(`🎁 DAILY WHEEL:\nYou won a +20% BOOST on your next upgrade!`);
    } else if (won.type === 'meme') {
        const clone = { ...won.val, uid: 'daily_' + Date.now() };
        state.inventory.push(clone);
        alert(`🎁 DAILY WHEEL:\nYou pulled a brainrot: ${won.val.name}!`);
    }

    addXP(30);
    saveProgress();
    updateUI();
    modalDailyWheel.classList.remove('active');
}

btnSpinDailyFree.onclick = () => spinDailyWheel(false);
btnSpinDailyAd.onclick = () => {
    simulateYandexAd(() => {
        spinDailyWheel(true);
    });
};

// --- 13. LIVE PLAYER CHAT SIMULATOR ---
btnToggleChat.onclick = () => {
    liveChatPanel.classList.toggle('active');
    SoundEngine.play('click');
};
btnChatClose.onclick = () => liveChatPanel.classList.remove('active');

const FAKE_CHAT_USERS = ['Alex_Sigma', 'Trippi_Fan', 'SkibidiPro', 'Tralalero_God', 'Sahur_King', 'GigaChad_99', 'Italiano_77', 'MemeHunter'];
const FAKE_CHAT_MESSAGES = [
    'lol lost 75% on Bombardiro Crocodilo 😭',
    'guys is it better to spin clockwise or counter-cw?',
    'just pulled Italian Baron on 4.5% lmaooo I am a god',
    'who wants to duel me for Tung Tung Sahur?',
    'any promo codes for 2,000 coins pls',
    'trade-up contract 5 in 1 is so good, got Shailushai!',
    'turbo mode spins so fast 🔥'
];

function addChatMessage(user, badge, text) {
    const msg = document.createElement('div');
    msg.className = 'chat-msg';
    msg.innerHTML = `
        <div class="chat-user-row">
            <span class="chat-user-badge">${badge}</span>
            <span class="chat-username">${user}</span>
        </div>
        <div class="chat-text">${text}</div>
    `;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (chatMessages.children.length > 25) {
        chatMessages.removeChild(chatMessages.firstChild);
    }
}

// Initial messages
addChatMessage('Sigma_Mod', 'MOD', 'Welcome to VIP Upgrader Brainrot!');
addChatMessage('Alex_Sigma', 'VIP', 'yo everyone, who is spinning?');

// Automatic chat message stream
setInterval(() => {
    const randUser = FAKE_CHAT_USERS[Math.floor(Math.random() * FAKE_CHAT_USERS.length)];
    const randText = FAKE_CHAT_MESSAGES[Math.floor(Math.random() * FAKE_CHAT_MESSAGES.length)];
    addChatMessage(randUser, 'PLAYER', randText);
}, 6500);

btnChatSend.onclick = sendUserChatMessage;
chatInputText.onkeydown = (e) => {
    if (e.key === 'Enter') sendUserChatMessage();
};

function sendUserChatMessage() {
    const txt = chatInputText.value.trim();
    if (!txt) return;
    addChatMessage('You', `LVL ${state.stats.level}`, txt);
    chatInputText.value = '';
    SoundEngine.play('click');
}

// --- 14. PROFILE AND SELLING BRAINROTS ---
function openProfileModal() {
    SoundEngine.play('click');
    renderProfileModal();
    modalProfile.classList.add('active');
}

btnOpenProfile.onclick = openProfileModal;
if (btnOpenLevel) btnOpenLevel.onclick = openProfileModal;
if (btnSellFromTab) btnSellFromTab.onclick = openProfileModal;
btnProfileClose.onclick = () => {
    SoundEngine.play('click');
    modalProfile.classList.remove('active');
};

function renderProfileModal() {
    const totalVal = getTotalInventoryValue();
    const rank = getRankName(state.stats.level);

    pmhFullRank.textContent = `${rank} • LEVEL ${state.stats.level}`;
    pmhCount.textContent = `${state.inventory.length} items in inventory`;
    pmhTotalVal.textContent = `🪙 ${totalVal.toLocaleString('en-US')}`;
    pmhBalanceVal.textContent = `🪙 ${state.balance.toLocaleString('en-US')}`;
    pmhTotalUpgrades.textContent = state.stats.totalUpgrades;

    const winrate = state.stats.totalUpgrades > 0
        ? ((state.stats.wins / state.stats.totalUpgrades) * 100).toFixed(1)
        : '0.0';
    pmhWinrate.textContent = `${winrate}%`;

    profileItemsGrid.innerHTML = '';
    if (state.inventory.length === 0) {
        profileItemsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-gray); padding: 40px;">
                Your inventory is empty! Open cases or buy brainrots in the shop.
            </div>`;
        return;
    }

    state.inventory.forEach(item => {
        const card = document.createElement('div');
        card.className = 'profile-item-card';
        card.style.setProperty('--tier-color', TIER_COLORS[item.tier]);
        card.innerHTML = `
            ${getMemeAvatarHTML(item, 'avatar-profile')}
            <div class="pic-name">${item.name}</div>
            <div class="pic-price">🪙 ${item.price.toLocaleString('en-US')}</div>
            <button class="btn-sell-card">💰 SELL</button>
        `;

        card.querySelector('.btn-sell-card').onclick = () => {
            sellMeme(item);
        };

        profileItemsGrid.appendChild(card);
    });
}

function sellMeme(item) {
    state.balance += item.price;
    state.inventory = state.inventory.filter(i => i.uid !== item.uid);
    state.selectedSources = state.selectedSources.filter(i => i.uid !== item.uid);

    SoundEngine.play('coin');
    saveProgress();
    updateUI();
    renderProfileModal();
}

btnSellAllInventory.onclick = () => {
    if (state.inventory.length === 0) return;

    const totalVal = getTotalInventoryValue();
    if (confirm(`Sell ALL brainrots (${state.inventory.length} pcs) for 🪙 ${totalVal.toLocaleString('en-US')}?`)) {
        state.balance += totalVal;
        state.inventory = [];
        state.selectedSources = [];

        SoundEngine.play('win');
        saveProgress();
        updateUI();
        renderProfileModal();
    }
};

// --- 15. CASE OPENING (CS2 ROULETTE) ---
let isOpeningCase = false;

window.triggerCaseOpening = function(type) {
    if (isOpeningCase) return;

    let cost = 200;
    let pool = [];
    let caseTitle = 'ROOKIE CASE';

    if (type === 'cheap') {
        cost = 200;
        caseTitle = 'ROOKIE CASE (🪙 200)';
        pool = MEME_DATABASE.filter(m => m.tier === 'common' || (m.tier === 'rare' && m.price <= 240));
    } else if (type === 'medium') {
        cost = 850;
        caseTitle = 'SIGMA CASE (🪙 850)';
        pool = MEME_DATABASE.filter(m => (m.tier === 'rare' && m.price > 240) || m.tier === 'epic');
    } else if (type === 'rich') {
        cost = 4000;
        caseTitle = 'BARON CASE (🪙 4,000)';
        pool = MEME_DATABASE.filter(m => m.tier === 'legendary' || m.tier === 'mythic' || m.tier === 'godlike');
    }

    if (state.balance < cost) {
        if (confirm('Not enough coins! Watch a short ad for +2,000 coins?')) {
            simulateYandexAd(() => {
                state.balance += 2000;
            });
        }
        return;
    }

    state.balance -= cost;
    state.stats.casesOpened++;
    addXP(25);
    saveProgress();
    updateUI();

    isOpeningCase = true;
    crCaseName.textContent = caseTitle;
    caseResultZone.style.display = 'none';
    btnCrClose.style.display = 'none';
    modalCaseRoulette.classList.add('active');

    rouletteTape.innerHTML = '';
    const totalCards = 45;
    const winnerIndex = 36;
    const winningItem = pool[Math.floor(Math.random() * pool.length)];

    for (let i = 0; i < totalCards; i++) {
        const item = (i === winnerIndex) ? winningItem : pool[Math.floor(Math.random() * pool.length)];
        const slot = document.createElement('div');
        slot.className = 'roulette-slot-card';
        slot.style.setProperty('--tier-color', TIER_COLORS[item.tier]);
        slot.innerHTML = `
            ${getMemeAvatarHTML(item, 'avatar-roulette')}
            <div class="roulette-slot-name">${item.name}</div>
            <div class="roulette-slot-price">🪙 ${item.price.toLocaleString('en-US')}</div>
        `;
        rouletteTape.appendChild(slot);
    }

    rouletteTape.style.transition = 'none';
    rouletteTape.style.transform = 'translateX(0px)';

    let startTimestamp = null;
    let lastSoundCard = -1;
    const scrollDuration = state.isTurbo ? 900 : 4500;

    requestAnimationFrame(() => {
        const winningCardEl = rouletteTape.children[winnerIndex];
        const cardWidth = winningCardEl ? winningCardEl.offsetWidth : 135;
        const cardStep = (winningCardEl && winningCardEl.nextElementSibling)
            ? (winningCardEl.nextElementSibling.offsetLeft - winningCardEl.offsetLeft)
            : (cardWidth + 10);
        const cardCenter = winningCardEl
            ? (winningCardEl.offsetLeft + (cardWidth / 2))
            : (winnerIndex * cardStep + (cardWidth / 2));

        const viewport = document.querySelector('.roulette-viewport');
        const viewportWidth = viewport ? viewport.clientWidth : 700;
        const randomJitter = (Math.random() - 0.5) * 45;
        const targetOffset = cardCenter - (viewportWidth / 2) + randomJitter;

        rouletteTape.style.transition = `transform ${scrollDuration}ms cubic-bezier(0.12, 0.8, 0.15, 1)`;
        rouletteTape.style.transform = `translateX(-${targetOffset}px)`;

        function tickCheck(time) {
            if (!startTimestamp) startTimestamp = time;
            const elapsed = time - startTimestamp;

            const p = Math.min(elapsed / scrollDuration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            const currentTranslate = targetOffset * ease;
            const currentCardIndex = Math.floor(currentTranslate / cardStep);

            if (currentCardIndex !== lastSoundCard) {
                SoundEngine.play('case_tick');
                lastSoundCard = currentCardIndex;
            }

            if (elapsed < scrollDuration) {
                requestAnimationFrame(tickCheck);
            } else {
                if (winningCardEl) winningCardEl.classList.add('winner-card');
                finishCaseOpening(winningItem);
            }
        }

        requestAnimationFrame(tickCheck);
    });
};

function finishCaseOpening(wonItem) {
    isOpeningCase = false;
    SoundEngine.play('win');
    triggerScreenShake();

    const itemWithUid = { ...wonItem, uid: 'case_' + Date.now() + Math.random().toString(36).substr(2, 5) };
    state.inventory.push(itemWithUid);
    saveProgress();
    updateUI();

    caseWinCard.innerHTML = `
        <div class="meme-card" style="--tier-color: ${TIER_COLORS[wonItem.tier]}">
            <span class="card-tag">${wonItem.tier.toUpperCase()}</span>
            ${getMemeAvatarHTML(wonItem)}
            <div class="card-title">${wonItem.name}</div>
            <div class="card-price-row">🪙 ${wonItem.price.toLocaleString('en-US')}</div>
        </div>`;

    caseResultZone.style.display = 'flex';
    btnCrClose.style.display = 'block';

    pushLiveFeed('You', wonItem.name, 'CASE');
}

btnClaimCaseDrop.onclick = () => {
    SoundEngine.play('click');
    modalCaseRoulette.classList.remove('active');
};
btnCrClose.onclick = () => {
    SoundEngine.play('click');
    modalCaseRoulette.classList.remove('active');
};

// --- 16. YANDEX GAMES SDK ADS ENGINE (v2) ---
let ysdk = null;
let adRoundsCounter = 0;

function initYandexSDK() {
    if (typeof YaGames !== 'undefined') {
        YaGames.init()
            .then(_ysdk => {
                ysdk = _ysdk;
                window.ysdk = _ysdk;
                console.log('✅ Yandex Games SDK v2 initialized successfully!');

                // Signal to Yandex that the game is loaded and ready (LoadingAPI)
                if (ysdk.features && ysdk.features.LoadingAPI && typeof ysdk.features.LoadingAPI.ready === 'function') {
                    ysdk.features.LoadingAPI.ready();
                }

                // Show Sticky Banner if available
                if (ysdk.adv && typeof ysdk.adv.getBannerAdvStatus === 'function') {
                    ysdk.adv.getBannerAdvStatus()
                        .then(({ isBannerAdvVisible }) => {
                            if (!isBannerAdvVisible && typeof ysdk.adv.showBannerAdv === 'function') {
                                ysdk.adv.showBannerAdv().catch(() => {});
                            }
                        })
                        .catch(() => {});
                }
            })
            .catch(err => {
                console.warn('⚠️ Yandex Games SDK init failed (local/offline mode):', err);
            });
    } else {
        console.log('ℹ️ Yandex Games SDK script not loaded (running outside Yandex Games). Using simulated ad fallback.');
    }
}

// Rewarded Video Ad (Official ysdk.adv.showRewardedVideo)
function showYandexRewardedAd(onRewarded, onClose) {
    if (ysdk && ysdk.adv && typeof ysdk.adv.showRewardedVideo === 'function') {
        SoundEngine.suspendAudio();
        ysdk.adv.showRewardedVideo({
            callbacks: {
                onOpen: () => {
                    console.log('🎬 Yandex Rewarded Video opened');
                },
                onRewarded: () => {
                    console.log('🎁 Yandex Rewarded: bonus awarded!');
                    if (typeof onRewarded === 'function') onRewarded();
                    SoundEngine.play('coin');
                    saveProgress();
                    updateUI();
                },
                onClose: () => {
                    console.log('🎬 Yandex Rewarded Video closed');
                    SoundEngine.resumeAudio();
                    if (typeof onClose === 'function') onClose();
                },
                onError: (e) => {
                    console.error('❌ Yandex Rewarded Video error:', e);
                    SoundEngine.resumeAudio();
                    // Fallback to simulated ad modal if live ad fails
                    runSimulatedAdFallback(onRewarded);
                }
            }
        });
    } else {
        // Fallback for local testing or offline desktop use
        runSimulatedAdFallback(onRewarded);
    }
}

// Fullscreen / Interstitial Ad (Official ysdk.adv.showFullscreenAdv)
function showYandexFullscreenAd(onClose) {
    if (ysdk && ysdk.adv && typeof ysdk.adv.showFullscreenAdv === 'function') {
        SoundEngine.suspendAudio();
        ysdk.adv.showFullscreenAdv({
            callbacks: {
                onClose: (wasShown) => {
                    SoundEngine.resumeAudio();
                    if (typeof onClose === 'function') onClose(wasShown);
                },
                onError: (e) => {
                    console.warn('❌ Yandex Fullscreen Ad error:', e);
                    SoundEngine.resumeAudio();
                    if (typeof onClose === 'function') onClose(false);
                }
            }
        });
    } else {
        if (typeof onClose === 'function') onClose(false);
    }
}

function triggerPeriodicFullscreenAd() {
    adRoundsCounter++;
    if (adRoundsCounter % 5 === 0) {
        showYandexFullscreenAd();
    }
}

// Simulated fallback for local testing & offline mode
function runSimulatedAdFallback(onRewarded) {
    modalAd.classList.add('active');
    let sec = 3;
    adCountdown.textContent = sec;
    adProgress.style.width = '0%';

    setTimeout(() => { adProgress.style.width = '100%'; }, 50);

    const timer = setInterval(() => {
        sec--;
        adCountdown.textContent = sec;
        if (sec <= 0) {
            clearInterval(timer);
            modalAd.classList.remove('active');
            SoundEngine.play('coin');
            if (typeof onRewarded === 'function') onRewarded();
            saveProgress();
            updateUI();
        }
    }, 1000);
}

// Backward-compatible alias for all existing calls
function simulateYandexAd(onRewarded) {
    showYandexRewardedAd(onRewarded);
}

btnFreeCoins.onclick = () => {
    showYandexRewardedAd(() => {
        state.balance += 2000;
        addXP(15);
    });
};

btnBoostChance.onclick = () => {
    if (state.boostActive) return;
    showYandexRewardedAd(() => {
        state.boostActive = true;
        SoundEngine.play('boost');
    });
};

// --- 17. UPGRADE ROLL (TURBO & DIRECTION) ---
btnUpgrade.onclick = () => {
    if (state.isSpinning || state.selectedSources.length === 0 || !state.selectedTarget) return;

    state.isSpinning = true;
    updateUI();

    const chance = getWinChance();
    const winAngle = (chance / 100) * (Math.PI * 2);

    const burnedUids = state.selectedSources.map(s => s.uid);
    state.lastBurnedItems = [...state.selectedSources];
    state.inventory = state.inventory.filter(item => !burnedUids.includes(item.uid));

    state.stats.totalUpgrades++;
    saveProgress();

    // Direction calculation
    const dirFactor = state.spinDirection === 'right' ? 1 : -1;
    const extraTurns = (4 + Math.random() * 2) * Math.PI * 2 * dirFactor;
    const stopOffset = (Math.random() * Math.PI * 2) * dirFactor;
    const targetAngle = currentNeedleAngle + extraTurns + stopOffset;

    const startTime = performance.now();
    const duration = state.isTurbo ? 700 : 4200; // Turbo mode 0.7 sec!
    const startAngle = currentNeedleAngle;
    let lastTickAngle = startAngle;

    function frame(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);

        currentNeedleAngle = startAngle + (targetAngle - startAngle) * ease;

        if (Math.abs(currentNeedleAngle - lastTickAngle) > 0.28) {
            SoundEngine.play('wheel_tick');
            lastTickAngle = currentNeedleAngle;
        }

        drawWheel(currentNeedleAngle);

        if (progress < 1) {
            requestAnimationFrame(frame);
        } else {
            completeUpgrade(currentNeedleAngle, winAngle);
        }
    }

    requestAnimationFrame(frame);
};

function completeUpgrade(needleAngle, winAngle) {
    state.isSpinning = false;
    const normalizedAngle = (needleAngle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);

    let isSuccess;
    if (state.spinDirection === 'right') {
        isSuccess = normalizedAngle <= winAngle;
    } else {
        isSuccess = (Math.PI * 2 - normalizedAngle) <= winAngle || normalizedAngle === 0;
    }

    const burnedSum = state.lastBurnedItems.reduce((acc, i) => acc + i.price, 0);
    generateProvablyFairRound(); // Generate new cryptographic hash for next round

    if (isSuccess) {
        state.stats.wins++;
        state.stats.totalCoinsWon += state.selectedTarget.price;
        addXP(50);
        SoundEngine.play('win');
        triggerScreenShake();

        const wonMeme = { ...state.selectedTarget, uid: 'up_' + Date.now() + Math.random().toString(36).substr(2, 5) };
        state.inventory.push(wonMeme);
        state.selectedSources = [wonMeme];
        state.boostActive = false;

        winCardTarget.innerHTML = `
            <div class="meme-card" style="--tier-color: ${TIER_COLORS[wonMeme.tier]}">
                <span class="card-tag">${wonMeme.tier.toUpperCase()}</span>
                ${getMemeAvatarHTML(wonMeme)}
                <div class="card-title">${wonMeme.name}</div>
                <div class="card-price-row">🪙 ${wonMeme.price.toLocaleString('en-US')}</div>
            </div>`;
        modalWin.classList.add('active');

        pushLiveFeed('You', state.selectedTarget.name, getWinChance().toFixed(1));
    } else {
        state.stats.losses++;
        addXP(15);
        SoundEngine.play('lose');

        state.selectedSources = [];
        state.boostActive = false;

        rescueBurnCost.textContent = `${burnedSum.toLocaleString('en-US')} 🪙`;
        modalRescue.classList.add('active');
    }

    saveProgress();
    updateUI();
}

// Item Rescue
btnRescueAd.onclick = () => {
    modalRescue.classList.remove('active');
    simulateYandexAd(() => {
        state.inventory.push(...state.lastBurnedItems);
        state.selectedSources = [...state.lastBurnedItems];
        SoundEngine.play('boost');
        alert(`🛡️ All your brainrots (${state.lastBurnedItems.length} pcs) were successfully rescued!`);
    });
};

btnRescueDecline.onclick = () => {
    SoundEngine.play('click');
    modalRescue.classList.remove('active');
    triggerPeriodicFullscreenAd();
};

btnWinDouble.onclick = () => {
    modalWin.classList.remove('active');
    showYandexRewardedAd(() => {
        if (state.selectedTarget) {
            const clone = { ...state.selectedTarget, uid: 'double_' + Date.now() };
            state.inventory.push(clone);
            SoundEngine.play('coin');
            alert(`✨ Second copy of "${state.selectedTarget.name}" added to inventory!`);
        }
    });
};

btnWinClaim.onclick = () => {
    SoundEngine.play('click');
    modalWin.classList.remove('active');
    triggerPeriodicFullscreenAd();
};

// --- 18. TAB SWITCHING ---
document.querySelectorAll('.hub-tab').forEach(tab => {
    tab.onclick = () => {
        SoundEngine.play('click');
        document.querySelectorAll('.hub-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.hub-content').forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const targetId = `tab-${tab.dataset.tab}`;
        const targetContent = document.getElementById(targetId);
        if (targetContent) targetContent.classList.add('active');

        const selectLowBtn = document.getElementById('btn-select-all-low');
        const sellBtn = document.getElementById('btn-sell-from-tab');
        const isInv = tab.dataset.tab === 'inventory';
        selectLowBtn.style.display = isInv ? 'block' : 'none';
        sellBtn.style.display = isInv ? 'block' : 'none';
    };
});

// --- 19. LIVE DROP FEED ---
const FAKE_USERS = ['Alex_Sigma', 'Trippi_Fan', 'SkibidiPro', 'Tralalero_God', 'Sahur_King', 'GigaChad_99', 'Italiano_77', 'MemeHunter'];
const feedEl = document.getElementById('live-feed');

function pushLiveFeed(user, itemWon, chance) {
    const item = document.createElement('div');
    item.className = 'live-item';
    item.innerHTML = `
        <span class="user">${user}</span>
        <span class="upgrade-ico">➔</span>
        <span class="item-won">${itemWon}</span>
        <span class="chance-tag">${chance}%</span>
    `;
    feedEl.prepend(item);
    if (feedEl.children.length > 10) {
        feedEl.removeChild(feedEl.lastChild);
    }
}

for (let i = 0; i < 5; i++) {
    const randomUser = FAKE_USERS[Math.floor(Math.random() * FAKE_USERS.length)];
    const randomMeme = MEME_DATABASE[Math.floor(Math.random() * 5) + 1];
    pushLiveFeed(randomUser, randomMeme.name, (Math.random() * 45 + 10).toFixed(1));
}

setInterval(() => {
    const randomUser = FAKE_USERS[Math.floor(Math.random() * FAKE_USERS.length)];
    const randomMeme = MEME_DATABASE[Math.floor(Math.random() * MEME_DATABASE.length)];
    const randChance = (Math.random() * 50 + 5).toFixed(1);
    pushLiveFeed(randomUser, randomMeme.name, randChance);
}, 7500);

// INITIALIZATION
updateUI();
initYandexSDK();
