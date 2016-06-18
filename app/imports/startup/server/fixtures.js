/* 
 * populates the database with bear phrases if empty
 */

import { Meteor } from 'meteor/meteor';
import { Bearphrases } from '../../api/bearphrases.js';

Meteor.startup(() => {

  if( Bearphrases.find().count() === 0 ) {

    const phrases = [
      'I understand.',
      'I wish I could give you a hug right now!',
      'Where could you have made a mistake?',
      'I am so sorry to hear that.',
      'Tell me more.',
      'What do you think are your options?',
      'And how about option B?',
      'Have you tried talking to somebody else about it?',
      'How old are you?',
      'How old is he?',
      'Hold on, I\'ll be back in a minute.',
      'I think you really need to go talk to a doctor...',
      'What does your mother think about it?'
    ];

    console.log(phrases);

    phrases.forEach((text) => {
      Bearphrases.insert({
        text: text,
        addedAt: new Date(),
        useCount: 0
      });
    });

  }

});
