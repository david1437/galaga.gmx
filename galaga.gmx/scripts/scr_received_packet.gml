var buffer = argument[0];
var message_id = buffer_read(buffer, buffer_u8);

if message_id == 1 {
    var p_score = buffer_read(buffer, buffer_u32);
}
