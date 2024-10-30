

const StoryModal = ({ onClose, who }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full h-[90vh]">
        <h2 className="text-xl font-semibold">{who == 1? "Her Story": "His Story"}</h2>
        {
            who == 1? 
            <div className="mt-4 max-h-[85%] overflow-y-auto ">
                <p>
                It all began with a casual friend request on Facebook. His face seemed familiar, but it took a moment to realize he was my best friend's brother from secondary school. What started as simple conversations quickly turned into a delightful routine, a daily ritual of checking in on each other that felt more like an addiction than a habit.
                </p>
                <br/>
                <p>
                As our chats flowed, he bravely asked me out. I hesitated at first, unsure if I was ready for a relationship. But he was genuinely cool and never pressured me; he was firm about his feelings without crossing any boundaries. That balance was refreshing, and before I knew it, we became an item.
                </p>
                <br/>
                <p>
                The chemistry between us was undeniable. He didn’t just capture my heart; he also mentored me in my coding career, guiding me with patience and encouragement. I realized I had found someone special—a partner willing to support every dream I had. 
                </p>
                <br/>
                <p>
                Now, as we look forward to a lifetime of adventures together, I can’t help but smile at the journey that brought us here. Who wouldn’t want a man so devoted to their dreams? With him by my side, I feel ready to embrace everything the future holds. I’m so grateful for our love, and I can’t wait to share forever with him.
                </p>
            </div>:
            <div className="mt-4 max-h-[85%] overflow-y-auto">
                <p>
                On Sunday, February 16, 2020, is etched in my memory forever. That's the day I first laid eyes on her at the Catholic Youth Organisation of Nigeria's Love Feast. Her stunning red gown, captivating smile, and gentle gaze left me spellbound. I couldn't help but steal glances, hoping to catch her attention. Though we didn't exchange a word that day, her presence lingered in my heart.
                </p>
                <br/>
                <p>
                Fate intervened in March, during the Covid-19 lockdown. While scrolling through Facebook, I stumbled upon her familiar face in my friend suggestions. We both have mutual friends, I couldn't believe it! I sent her a friend request, and she accepted. Our online conversations blossomed into calls and endless texts.
                </p>
                <br/>
                <p>
                Our first hangout, though quiet, spoke volumes. Her radiant smile and lovely photos we took- sealed our connection. We became inseparable, sharing every moment, laughter, and tear. Our bond strengthened through our friendship and coding sessions. 
                </p>
                <br/>
                <p>
                As our friendship blossomed into romance, I realized she was my soulmate. Every conversation, gesture, and shared dream confirmed it. Today, I'm overjoyed to say we're destined to spend forever together.
                </p>
                <p>
                She's not just my partner; she's my best friend, coding companion, and forever love.
                </p>
            </div>
        }
        {/* <p className="mt-4">This is the content of the modal. You can add more details here.</p> */}
        <button 
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded" 
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StoryModal;