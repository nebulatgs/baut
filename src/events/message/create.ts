import { Message } from 'discord.js';
import { setUserEligible } from '../../functions/setUserEligible';
import { channels } from '../../guild';
import Event from '../../structures/Event';

export default new Event(
	{
		name: 'messageCreate',
	},
	async (mammot, message: Message) => {
		// Ignore bots
		if (message.author.bot) return;

		// Introductions channel only
		if (message.channel.id === channels.intros) {
			try {
				await setUserEligible(message.member);
			} catch (error) {
				console.error(error);
			}
		}

		// aaryaman valentine builderbaut

		const aaryaman = mammot.client.users.cache.get('768075359651495956');
		const builderbaut = mammot.client.users.cache.get('917874250759671900');

		if (
			message.author === aaryaman &&
			message.content.toLowerCase().includes('will you be my valentine')
		) {
			await message.reply(
				"HELL NAH! Tejas is mah BOI!!! Fuck you Aaryaman 🤡"
			);
			return;
		}

		if (
			message.content
				.toLowerCase()
				.includes('will you be my valentine') &&
			message.mentions.has(builderbaut)
		) {
			await message.reply(
				"Nah bro, Tejas is the OG"
			);
			return;
		}
	}
);
