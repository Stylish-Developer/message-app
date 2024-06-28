import { StyleSheet, View } from 'react-native';
import { useState, useCallback, useLayoutEffect } from 'react';
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { auth, dataBase } from '@/config/firebase';

const Chat = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const insets = useSafeAreaInsets();

    useLayoutEffect(() => {
        const collectionRef = collection(dataBase, 'chats');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

        const unSubscribe = onSnapshot(q, snapshot => {
            console.log("snapshot", snapshot);
            setMessages(snapshot.docs.map((snap) => ({
                _id: snap.id,
                createdAt: snap.data().createdAt.toDate(),
                text: snap.data().text,
                user: snap.data().user
            })));
        });

        return () => unSubscribe();
    }, []);

    const onSend = useCallback((messages: any[] = []) => {
        setMessages((previousMessages: any) =>
            GiftedChat.append(previousMessages, messages)
        );
        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(dataBase, 'chats'), {
            _id,
            createdAt,
            text,
            user
        });
    }, []);

    return (
        <View style={[styles.homeView, { paddingTop: insets.top, paddingRight: insets.right, paddingBottom: insets.bottom, paddingLeft: insets.left }]} className="bg-ca-lightVoilet">
            <GiftedChat
                messages={messages}
                showAvatarForEveryMessage={false}
                showUserAvatar={false}
                onSend={messages => onSend(messages)}
                messagesContainerStyle={{
                    backgroundColor: '#fff'
                }}
                user={{
                    _id: auth.currentUser?.email ?? 'default_user',
                    avatar: 'https://i.pravatar.cc/400'
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    homeView: {
        flex: 1
    }
});

export default Chat;
